import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { AuthContext, AuthProvider } from "../context/authContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(tab)"
          options={{ headerShown: false, title: "Home" }}
        />
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
    </AuthProvider>
  );
};

export default RootLayout;
