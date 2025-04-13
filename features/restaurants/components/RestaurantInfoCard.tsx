import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const CardStyled = styled(Card)({
  backgroundColor: "white",
});

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
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Title title={name} />
    </CardStyled>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
