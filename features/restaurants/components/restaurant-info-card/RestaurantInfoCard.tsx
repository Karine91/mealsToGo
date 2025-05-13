import React from "react";
import { SvgXml } from "react-native-svg";

import openIcon from "@/assets/images/open";
import star from "@/assets/images/star";
import { Text } from "@/components/Typography";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

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
  restaurant: RestaurantsItem;
};

const RestaurantInfoCard = ({ restaurant }: Props) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow = true,
    rating = 0,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from({ length: rating });

  return (
    <CardStyled elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] as string }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, ind) => (
              <SvgXml
                key={`star-${placeId}-${ind}`}
                xml={star}
                width={20}
                height={20}
              />
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
