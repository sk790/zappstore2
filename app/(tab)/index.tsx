import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import SliderBanner from "@/components/Banner";
import { AuthContext } from "@/context/authContext";
import Search from "@/components/Search";

const Home = () => {
  const { user } = useContext(AuthContext);
  const categories = [
    { name: "Plumber", icon: require("../../assets/images/plumber.jpeg") },
    {
      name: "Electrician",
      icon: require("../../assets/images/plumber.jpeg"),
    },
    {
      name: "Bike Mechanic",
      icon: require("../../assets/images/plumber.jpeg"),
    },
    {
      name: "Car Mechanic",
      icon: require("../../assets/images/plumber.jpeg"),
    },
  ];
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Navbar />
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold",marginBottom:5 }}>Welcome, {user.mobile}</Text>
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text style={styles.title}>What Are You</Text>
              <Text style={styles.title}>Looking For</Text>
              <Text style={styles.title}>Today</Text>
            </View>
          </View>
          <Search/>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <SliderBanner />
            <Text style={styles.categoriesTitle}>Most Used Services</Text>
            <View style={styles.categoriesContainer}>
              <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                // keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => console.log("clicked")}
                  >
                    <View
                      style={{
                        flex: 1,
                        width: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        padding:5,
                        backgroundColor: "white",
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                      }}
                    >
                      <Image source={item.icon} style={styles.categoryIcon} />
                      <Text style={styles.categoryText}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    // paddingHorizontal: 10,
  },
  categoryItem: {
    // backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  categoryText: {
    fontSize: 12,
    color: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  logo: {
    width: 100,
    height: 30,
  },
  placeholder: {
    width: 24,
  },
  content: {
    padding: 16,
  },
  greeting: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
  },
  notificationIcon: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  bannerContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: 150,
  },
  bannerContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: "center",
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 12,
  },
  bookNowButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  bookNowText: {
    color: "#fff",
    fontWeight: "bold",
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  categoriesContainer: {
    paddingVertical: 10,
  },
  categoryIcon: {
    width:90,
    height: 60,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
