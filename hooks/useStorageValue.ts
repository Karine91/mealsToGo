import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "@/services/auth/auth.context";

export function useStorageValue<T>(storageKey: string, defaultValue: T) {
  const [state, setState] = useState(defaultValue);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(AuthContext);

  function storeValue() {
    try {
      AsyncStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }

  async function getValue() {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      setLoaded(true);
      return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getValue().then((newState) => {
      if (newState) {
        setState(newState);
      }
    });
  }, [user, setState]);

  useEffect(() => {
    storeValue();
  }, [state]);

  return [state, setState, loaded] as const;
}
