import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: true ,title: "Home"}} />
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Home" }}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: true, title: "Login" }}
      />
      <Stack.Screen
        name="signup"
        options={{ headerShown: true, title: "Signup" }}
      />
    </Stack>
  );
};

export default RootLayout;
