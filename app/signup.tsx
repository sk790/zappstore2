import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, Redirect, router } from "expo-router";
import { AuthContext } from "@/context/authContext";

export default function SignUpScreen() {
  const [accountType, setAccountType] = useState("user");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  const { user, setUserInfo } = useContext(AuthContext);

  if (user) {
    return <Redirect href="/(tab)/" />;
  }

  const handleSignUp = async () => {
    if (!validatePhoneNumber(mobileNumber)) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    if (!isChecked) {
      Alert.alert(
        "Terms Not Accepted",
        "Please accept the terms and privacy policy to continue."
      );
      return;
    }
    const res = await fetch("http://192.168.76.190:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile: mobileNumber,
        password: password,
        role: accountType,
      }),
    });

    const data = await res.json();

    if (data.user) {
      Alert.alert("Sign Up Successful");
      setUserInfo(data.user);
      router.push("/(tab)/");
    } else {
      Alert.alert("Sign Up Failed", `${data.message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <Text style={styles.title}>Take the First Step with Us</Text>

            <Text style={styles.subtitle}>Choose your account type</Text>

            <View style={styles.accountTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.accountTypeButton,
                  accountType === "user" && styles.selectedAccountType,
                ]}
                onPress={() => setAccountType("user")}
              >
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={accountType === "user" ? "#00A3E0" : "#CCCCCC"}
                />
                <Text
                  style={[
                    styles.accountTypeText,
                    accountType === "user" && styles.selectedAccountTypeText,
                  ]}
                >
                  User
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.accountTypeButton,
                  accountType === "service" && styles.selectedAccountType,
                ]}
                onPress={() => setAccountType("service")}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={accountType === "service" ? "#00A3E0" : "#CCCCCC"}
                />
                <Text
                  style={[
                    styles.accountTypeText,
                    accountType === "service" && styles.selectedAccountTypeText,
                  ]}
                >
                  Service
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Mobile Number</Text>

            <View style={styles.phoneInputContainer}>
              <View style={styles.countryCode}>
                <Image
                  source={{ uri: "https://flagcdn.com/w20/in.png" }}
                  style={styles.flag}
                />
                <Text style={styles.countryCodeText}>+91</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="Enter mobile number"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                maxLength={10}
              />
            </View>
            <TextInput
              placeholder="Create a password"
              style={{
                borderColor: "#CCCCCC",
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
              }}
              keyboardType="visible-password"
              value={password}
              onChangeText={setPassword}
            />

            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                <View style={[styles.checkbox, isChecked && styles.checked]}>
                  {isChecked && (
                    <Ionicons name="checkmark" size={18} color="white" />
                  )}
                </View>
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>
                By creating an account, I acknowledge your{" "}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Alert.alert("Terms", "Terms and Conditions go here")
                  }
                >
                  terms
                </Text>{" "}
                and{" "}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Alert.alert("Privacy Policy", "Privacy Policy goes here")
                  }
                >
                  privacy policy
                </Text>
              </Text>
            </View>

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Link href={"/Login"} style={{ textAlign: "center" }}>
              <Text style={styles.loginText}>
                Have an existing account?{" "}
                <Text style={styles.link}>Log in now</Text>
              </Text>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#00A3E0",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  accountTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  accountTypeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginHorizontal: 5,
  },
  selectedAccountType: {
    borderColor: "#00A3E0",
    backgroundColor: "#F0F9FF",
  },
  accountTypeText: {
    marginTop: 5,
    color: "#CCCCCC",
  },
  selectedAccountTypeText: {
    color: "#00A3E0",
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  phoneInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    marginBottom: 20,
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "#CCCCCC",
  },
  flag: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryCodeText: {
    fontWeight: "bold",
  },
  phoneInput: {
    flex: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#00A3E0",
    borderColor: "#00A3E0",
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: "#666666",
  },
  link: {
    color: "#00A3E0",
  },
  signUpButton: {
    backgroundColor: "#00A3E0",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    color: "#666666",
  },
});
