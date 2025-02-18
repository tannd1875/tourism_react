export type directionType = {
  _id: string;
  title: string;
  address: string;
  price: number;
  classify: string;
  images: string[];
  description: string[];
};

export type tipType = {
  _id: string;
  title: string;
  images: string[];
  description: string[];
};

// in Sub menu navbar
export type SubMenu = {
  body: string;
  href: string;
};

// for slider
type directionSlider = {
  slideList: directionType[];
  type: "direction";
};

type tipSlider = {
  slideList: tipType[];
  type: "tip";
};
export type SliderType = directionSlider | tipSlider;

export type headingType = {
  count?: number;
  type?: string;
  title?: string;
};
