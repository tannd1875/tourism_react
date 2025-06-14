import { Direction, Tip } from "../types/type";

export const DIRECTION_URL = "http://localhost:5001/direction";
export const TIP_URL = "http://localhost:5001/tip";

export const fetchDirectionList = async (
  URL = DIRECTION_URL
): Promise<Array<Direction>> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch directions: ${response.statusText}`);
    }
    const data: Array<Direction> = await response.json();
    return data.data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch directions: " + error);
  }
};

export const fetchTipList = async (URL = TIP_URL): Promise<Array<Tip>> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch tips: ${response.statusText}`);
    }
    const data: Array<Tip> = await response.json();
    return data.data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch tips: " + error);
  }
};

export const fetchInformation = async (
  URL: string
): Promise<Tip | Direction> => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch tips: ${response.statusText}`);
    }
    const data: Tip | Direction = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch tips: " + error);
  }
};

export const fetchProvinceList = async (): Promise<Array<string>> => {
  try {
    const response = await fetch(`${DIRECTION_URL}/province`);
    if (!response.ok) {
      throw new Error(`Failed to fetch directions: ${response.statusText}`);
    }
    const data: Array<string> = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch directions: " + error);
  }
};

export const fetchClassificationList = async (): Promise<Array<string>> => {
  try {
    const response = await fetch(`${DIRECTION_URL}/classification`);
    if (!response.ok) {
      throw new Error(`Failed to fetch directions: ${response.statusText}`);
    }
    const data: Array<string> = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch directions: " + error);
  }
};
