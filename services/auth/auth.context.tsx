import { useSegments } from "expo-router";
import { type User } from "firebase/auth";
import { createContext, useState, PropsWithChildren, useEffect } from "react";

import { login, signUp, onAuthStateChange, logout } from "./auth.service";

type AuthContextValue = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: null | string;
  onLogin: (email: string, password: string) => void;
  onSignUp: (email: string, password: string) => void;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  onLogin: () => {},
  onSignUp: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const segments = useSegments();

  useEffect(() => {
    onAuthStateChange((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    setError(null);
  }, [segments]);

  const onLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await login(email, password);
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
      await signUp(email, password);
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
        onLogout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
