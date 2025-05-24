import { useRoute } from "@react-navigation/native";
import { useSegments } from "expo-router";
import type { User } from "firebase/auth";
import { createContext, useState, PropsWithChildren, useEffect } from "react";

import { login, signUp } from "./auth.service";

type AuthContextValue = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: null | string;
  onLogin: (email: string, password: string) => void;
  onSignUp: (email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  onLogin: () => {},
  onSignUp: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const segments = useSegments();

  useEffect(() => {
    setError(null);
  }, [segments]);

  const onLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const user = await login(email, password);
      setUser(user);
    } catch (error: any) {
      console.log(error);
      setError("Authentication error.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSignUp = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const user = await signUp(email, password);
      setUser(user);
    } catch (error: any) {
      console.log(error.message);
      setError("Authentication error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onSignUp,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
