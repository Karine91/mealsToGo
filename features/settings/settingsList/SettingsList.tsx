import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";

import { Text } from "@/components/Typography";
import { colors } from "@/infrastructure/theme/colors";
import { AuthContext } from "@/services/auth/auth.context";

import { SettingsItem, AvatarContainer, SettingsListSection } from "./styles";

const SettingsList = () => {
  const router = useRouter();
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState<string | null>(null);

  const getProfilePicture = async () => {
    const photo = user && (await AsyncStorage.getItem(`${user.uid}-photo`));
    setPhoto(photo);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture();
    }, [])
  );

  return (
    <>
      <AvatarContainer>
        <TouchableOpacity
          onPress={() =>
            router.navigate({ pathname: "/private/(tabs)/settings/camera" })
          }
        >
          {!photo && <Avatar.Icon size={180} icon="human"></Avatar.Icon>}
          {photo && <Avatar.Image size={180} source={{ uri: photo }} />}
        </TouchableOpacity>
        <Text variant="label">{user?.email}</Text>
      </AvatarContainer>

      <SettingsListSection>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          onPress={() =>
            router.navigate({ pathname: "/private/settings/favorites" })
          }
          left={(props) => (
            <List.Icon {...props} color={colors.error} icon="heart" />
          )}
        />
        <SettingsItem
          title="Payment"
          onPress={() => null}
          left={(props) => (
            <List.Icon {...props} color={colors.secondary} icon="cart" />
          )}
        />

        <SettingsItem
          title="Past Orders"
          onPress={() => null}
          left={(props) => (
            <List.Icon {...props} color={colors.secondary} icon="history" />
          )}
        />

        <SettingsItem
          title="Logout"
          onPress={onLogout}
          left={(props) => (
            <List.Icon {...props} color={colors.secondary} icon="logout" />
          )}
        />
      </SettingsListSection>
    </>
  );
};

export default SettingsList;
