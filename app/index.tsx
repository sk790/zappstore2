import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Link, Redirect } from "expo-router";

const Home = () => {
  const user = null;
  if (!user) {
    return <Redirect href={"/(tab)/"} />;
  }
  return (
    <View>
      <Text>Home</Text>
      
    </View>
  );
};

export default Home;
