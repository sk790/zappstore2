import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Navbar from "@/components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeLayout = () => {
  return (
    <>
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
                  size={28}
                  color={color}
                />
              ) : (
                <Ionicons name="home-outline" size={28} color={color} />
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
                  size={28}
                  color={color}
                />
              ) : (
                <Ionicons name="cart-outline" size={28} color={color} />
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
                  size={28}
                  color={color}
                />
              ) : (
                <Ionicons name="wallet-outline" size={28} color={color} />
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
                  size={28}
                  color={color}
                />
              ) : (
                <Ionicons name="person-outline" size={28} color={color} />
              ),
          }}
        />
      </Tabs>
    </>
  );
};

export default HomeLayout;
