import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";

import { Text } from "@/components/Typography";
import { AuthContext } from "@/services/auth/auth.context";

import { SettingsItem, AvatarContainer } from "./styles";

const SettingsList = () => {
  const router = useRouter();
  const { onLogout, user } = useContext(AuthContext);

  return (
    <>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human"></Avatar.Icon>
        <Text variant="label">{user?.email}</Text>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          onPress={() =>
            router.navigate({ pathname: "/private/settings/favorites" })
          }
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />

        <SettingsItem
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
        />
      </List.Section>
    </>
  );
};

export default SettingsList;
