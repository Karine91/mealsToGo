import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";
import { Toast } from "toastify-react-native";

import { colors } from "@/infrastructure/theme/colors";

import {
  locationRequest,
  locationTransform,
  type Location,
} from "./location.service";

interface ILocationContext {
  isLoading: boolean;
  error: string | null;
  location: Location | null;
  search: (s: string) => void;
  keyword: string;
}

export const LocationContext = createContext<ILocationContext>({
  isLoading: false,
  error: null,
  location: null,
  search: () => null,
  keyword: "",
});

export const LocationContextProvider = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [keyword, setKeyword] = useState("Antwerp");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm: string) => {
    setIsLoading(true);
    setKeyword(searchTerm);
  };

  useEffect(() => {
    if (!keyword) return;
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLocation(null);
        Toast.show({
          type: "error",
          text1: err,
          backgroundColor: colors.error,
          iconColor: colors.bg.primary,
          textColor: colors.bg.primary,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
