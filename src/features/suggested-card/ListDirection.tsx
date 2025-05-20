import SugDirection from "./SuggestedDirection";
import { directionType } from "../types/type";

type Props = {
  directions: directionType[];
};

const ListDirection = ({ directions }: Props) => {
  return (
    <div className="flex justify-between items-center gap-[50px] ml-[16px]">
      {directions.map((direction) => (
        <SugDirection
          key={direction._id}
          id={direction._id}
          name={direction.title}
          address={direction.address}
          classify={direction.classify}
          score={5}
          price={direction.price}
          image={direction.images[0]}
        ></SugDirection>
      ))}
    </div>
  );
};

export default ListDirection;
