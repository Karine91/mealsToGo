import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import { AuthContext } from "@/services/auth/auth.context";

const Settings = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <SafeAreaContainerView>
      <Text>Settings</Text>
      <Button
        onPress={() => {
          onLogout();
        }}
      >
        Logout
      </Button>
    </SafeAreaContainerView>
  );
};

export default Settings;
