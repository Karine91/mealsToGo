import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import styled from "styled-components/native";

import { Text } from "@/components/Typography";
import Account from "@/features/account/components/Account/Account";
import AccountContainer from "@/features/account/components/AccountContainer/AccountContainer";

const AnimationWrapper = styled(LottieView)(({ theme }) => ({
  width: "100%",
  height: "40%",
  position: "absolute",
  top: 30,
  padding: theme.space[2],
}));

const AccountPage = () => {
  const animation = useRef<LottieView>(null);
  return (
    <AccountContainer>
      <AnimationWrapper
        autoPlay
        loop
        ref={animation}
        resizeMode="cover"
        key="animation"
        source={require("@/assets/watermelon.json")}
      />
      <Text variant="heading">Meals To Go</Text>
      <Account />
    </AccountContainer>
  );
};

export default AccountPage;
