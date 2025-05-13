import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (
  searchTerm: string,
): Promise<LocationResult> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm as keyof typeof locations];
    if (!locationMock) reject("not found");
    resolve(locationMock);
  });
};

export type LocationResult = (typeof locations)[keyof typeof locations];
export type Location = ReturnType<typeof locationTransform>;

export const locationTransform = (result: LocationResult) => {
  const { geometry } = result.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
