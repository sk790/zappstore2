import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons
                style={{ marginBottom: -3 }}
                name="home"
                size={24}
                color={color}
              />
            ) : (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons
                style={{ marginBottom: -3 }}
                name="cart"
                size={24}
                color={color}
              />
            ) : (
              <Ionicons name="cart-outline" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons
                style={{ marginBottom: -3 }}
                name="wallet"
                size={24}
                color={color}
              />
            ) : (
              <Ionicons name="wallet-outline" size={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons
                style={{ marginBottom: -3 }}
                name="person"
                size={24}
                color={color}
              />
            ) : (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
