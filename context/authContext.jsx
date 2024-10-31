import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserInfo = async (userInfo) => {
    setUser(userInfo);
    await AsyncStorage.setItem("user", JSON.stringify(userInfo));
  };


  return (
    <AuthContext.Provider value={{ user, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
