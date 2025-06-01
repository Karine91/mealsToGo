import camelize from "camelize";

import { mockImages, mocks } from "./mock";

export type RestaurantsResult = (typeof mocks)[keyof typeof mocks];

export const restaurantsRequest = (
  location: `${number},${number}`
): Promise<RestaurantsResult> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location as keyof typeof mocks];
    if (!mock) reject("No restaurants found.");
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results }: RestaurantsResult) => {
  const mappedResults = camelize(results).map((restaurant) => {
    const { vicinity, openingHours, businessStatus, ...others } = restaurant;
    return {
      ...others,
      address: vicinity,
      isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
      photos: restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      }),
    };
  });
  return mappedResults;
};

export type RestaurantsItem = ReturnType<typeof restaurantsTransform>[number];
