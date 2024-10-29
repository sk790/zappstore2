import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      setAuth(token);
    } catch (error) {
      console.error("Error retrieving auth token", error);
    }
  };

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      console.log("Token stored successfully");
      setAuth(token);
    } catch (error) {
      console.error("Error storing auth token", error);
    }
  };

  const login = (token) => {
    setAuth(token);
    storeToken(token);
  };
  return (
    <AuthContext.Provider value={{ auth, login, setAuth, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};
