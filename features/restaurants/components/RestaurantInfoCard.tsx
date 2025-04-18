import React from "react";
import { Card } from "react-native-paper";
import { Text } from "react-native";
import styled from "styled-components/native";

const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: theme.colors.ui.white,
}));

const CardCover = styled(Card.Cover)(({ theme }) => ({
  padding: 20,
  backgroundColor: theme.colors.bg.primary,
}));

const CardTitle = styled(Text)(({ theme }) => ({
  fontFamily: theme.fonts.body,
  padding: theme.space[3],
  color: theme.colors.ui.primary,
}));

type Props = {
  restaurant?: {
    name: string;
    icon: any;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
};

const RestaurantInfoCard = ({ restaurant = {} as any }: Props) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <CardStyled elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <CardTitle>{name}</CardTitle>
    </CardStyled>
  );
};

export default RestaurantInfoCard;
