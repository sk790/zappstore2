import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        backgroundColor: "white",
        padding: 10,
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
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput placeholder="What you looking for?" />
        <Ionicons name="search" size={28} color="black" />
      </View>
    </View>
  );
};

export default Search;
