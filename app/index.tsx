import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/authContext";

const Home = () => {
  const { user, setUserInfo } = useContext(AuthContext);
  AsyncStorage.getItem("user").then((value) => {
    if (value) {
      setUserInfo(JSON.parse(value));
    }
  });

  if (!user) {
    return <Redirect href="/Login" />;
  } else {
    return <Redirect href="/(tab)/" />;
  }
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
