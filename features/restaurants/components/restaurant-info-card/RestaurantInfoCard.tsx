import React from "react";

import { SvgXml } from "react-native-svg";

import star from "@/assets/images/star";
import openIcon from "@/assets/images/open";
import { Text } from "@/components/Typography";

import {
  CardStyled,
  Info,
  Section,
  SectionEnd,
  CardCover,
  Rating,
  Address,
  Icon,
} from "./styles";

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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from({ length: rating });

  return (
    <CardStyled elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && <SvgXml xml={openIcon} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </CardStyled>
  );
};

export default RestaurantInfoCard;
