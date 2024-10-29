import React, { useContext, useEffect, useState } from "react";
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
import { Link, Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/authContext";

export default function SignUpScreen() {
  const [accountType, setAccountType] = useState("user");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const { login, auth } = useContext(AuthContext);

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };
  
  if(auth){
    return <Redirect href="/(tab)/" />
  }

  const handleSignUp = () => {
    login(accountType);
    if (!validatePhoneNumber(mobileNumber)) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
      return;
    }

    // Here you would typically call an API to register the user
    Alert.alert(
      "Sign Up Successful",
      `Account Type: ${accountType}\nPhone Number: +91${mobileNumber}`
    );
    // storeToken(accountType);
  };
  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem("@auth_token", token);
      console.log("Token stored successfully");
      setToken(token);
    } catch (error) {
      console.error("Error storing auth token", error);
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
              placeholder="Enter Password"
              style={{
                borderColor: "#CCCCCC",
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                marginBottom: 15,
              }}
              // value={mobileNumber}
              // onChangeText={setMobileNumber}
              // maxLength={10}
            />

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpButtonText}>Login</Text>
            </TouchableOpacity>
            <Link href={"/signup"} style={{ textAlign: "center" }}>
              <Text style={styles.loginText}>
                Create a new account? <Text style={styles.link}>signup</Text>
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
    paddingTop: 100,
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
