import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Navbar = () => {
  return (
    <View
      style={{
        marginTop: 20,
        borderColor: "gray",
        padding: 10,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => console.log("menu clicked")}>
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
        ZappStore
      </Text>
      <TouchableOpacity onPress={() => router.push("/notification")}>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
