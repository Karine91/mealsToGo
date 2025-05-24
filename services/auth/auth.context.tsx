import type { User } from "firebase/auth";
import { createContext, useState, PropsWithChildren } from "react";

import { login } from "./auth.service";

type AuthContextValue = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: null | string;
  onLogin: (email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  onLogin: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const user = await login(email, password);
      console.log({ user });
      setUser(user);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
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
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
