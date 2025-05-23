import { TipInstance } from "../../types/type";

const TipCard = ({ title, cover, _id }: TipInstance) => {
  return (
    <a
      className="transition-all duration-200 w-64 rounded my-4 hover:scale-105"
      href={`/information?id=${_id}&type=tip`}
    >
      <div className="w-64 h-64 overflow-hidden mx-auto rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src={cover}
          alt={title}
        />
      </div>
      <div className="text-xl mx-4 mb-4 mt-8">
        <h1 className="font-bold mb-2 truncate">{title}</h1>
      </div>
    </a>
  );
};

export default TipCard;
