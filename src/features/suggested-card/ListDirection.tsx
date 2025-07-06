import DirectionCard from "./DirectionCard";
import { Direction } from "../../types/type";

const ListDirection = ({ directions }: { directions: Direction[] }) => {
  return (
    <div className="flex justify-between items-center">
      {directions.map((direction) => (
        <DirectionCard
          key={direction._id}
          _id={direction._id}
          title={direction.title}
          province={direction.province}
          detailAddress={direction.detailAddress}
          classify={direction.classify}
          score={5}
          price={direction.price}
          cover={direction.images[0]}
        />
      ))}
    </div>
  );
};

export default ListDirection;
