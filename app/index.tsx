import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/authContext";

const Home = () => {
  const { auth, getToken } = useContext(AuthContext);
  console.log({ auth });

  useEffect(() => {
    getToken();
  }, []);

  if (auth) {
    return <Redirect href="/(tab)/" />;
  } else {
    return <Redirect href="/Login" />;
  }
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
