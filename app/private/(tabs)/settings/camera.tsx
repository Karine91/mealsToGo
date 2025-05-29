import AsyncStorage from "@react-native-async-storage/async-storage";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useContext, useRef } from "react";
import { View } from "react-native";
import { IconButton, Button } from "react-native-paper";
import styled from "styled-components/native";

import { Text } from "@/components/Typography";
import { AuthContext } from "@/services/auth/auth.context";

const CameraPageContainer = styled(View)(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: theme.space[3],
}));

const CameraViewStyled = styled(CameraView)({
  flex: 1,
  alignSelf: "start",
});

const CaptureBtn = styled(IconButton)(({ theme }) => ({
  margin: "auto",
  marginBottom: theme.space[4],
}));

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (!permission) return null;

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <CameraPageContainer>
        <Text variant="label">We need your permission to show the camera</Text>
        <Button onPress={requestPermission}>Grant permission</Button>
      </CameraPageContainer>
    );
  }

  const snap = async () => {
    if (cameraRef.current && user) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      router.back();
    }
  };

  return (
    <CameraPageContainer>
      <CameraViewStyled mirror facing="front" ref={cameraRef}>
        <CaptureBtn mode="contained" onPress={snap} icon="camera" size={50} />
      </CameraViewStyled>
    </CameraPageContainer>
  );
};

export default Camera;
