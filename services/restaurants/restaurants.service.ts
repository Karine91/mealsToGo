import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export type RestaurantsResult = (typeof mocks)[keyof typeof mocks];

export const restaurantsRequest = (
  location: string = "37.7749295,-122.4194155"
): Promise<RestaurantsResult> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location as keyof typeof mocks];
    if (!mock) reject("not found");
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results }: RestaurantsResult) => {
  const mappedResults = camelize(results).map((restaurant) => {
    return {
      ...restaurant,
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
