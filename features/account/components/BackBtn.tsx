import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

const BtnStyled = styled(Button).attrs(({ theme }) => ({
  buttonColor: theme.colors.elevation.level4,
}))``;

const ButtonWrapper = styled(View)(({ theme }) => ({
  padding: theme.space[2],
  flexDirection: "row",
}));

const BackBtn = () => {
  return (
    <ButtonWrapper>
      <Link href=".." asChild>
        <BtnStyled icon="arrow-left-thick" mode="contained-tonal">
          Back
        </BtnStyled>
      </Link>
    </ButtonWrapper>
  );
};

export default BackBtn;
