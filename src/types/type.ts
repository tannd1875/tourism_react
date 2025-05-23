export type Direction = {
  _id: string;
  title: string;
  address: string;
  price: number;
  classify: string;
  images: string[];
  description: string[];
  score: number;
};

export type DirectionInstance = {
  _id: string;
  title: string;
  address: string;
  price: number;
  classify: string;
  cover: string;
  score: number;
};

export type Tip = {
  _id: string;
  title: string;
  images: string[];
  description: string[];
};

export type TipInstance = {
  _id: string;
  title: string;
  cover: string;
};

export type SubMenu = {
  body: string;
  href: string;
};

// for slider
type DirectionSlider = {
  slideList: Direction[];
  type: "direction";
};

type TipSlider = {
  slideList: Tip[];
  type: "tip";
};
export type Slider = DirectionSlider | TipSlider;

export type HeadingType = {
  count?: number;
  type?: string;
  title?: string;
};

export type RelatedListType = {
  currInfo: string;
  title: string;
  type: string;
};
