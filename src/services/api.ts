import { directionType, tipType } from "../types/type";

export const DIRECTION_URL = "http://localhost:5001/direction";
export const TIP_URL = "http://localhost:5001/tip";

export const fetchDirectionList = async (
  URL = DIRECTION_URL
): Promise<Array<directionType>> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch directions: ${response.statusText}`);
    }
    const data: Array<directionType> = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch directions: " + error);
  }
};

export const fetchTipList = async (URL = TIP_URL): Promise<Array<tipType>> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch tips: ${response.statusText}`);
    }
    const data: Array<tipType> = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch tips: " + error);
  }
};

export const fetchInformation = async (
  URL: string
): Promise<tipType | directionType> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch tips: ${response.statusText}`);
    }
    const data: tipType | directionType = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch tips: " + error);
  }
};
