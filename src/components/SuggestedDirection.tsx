import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faLocationDot,
  faMoneyBill,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../utils/formatting";

type Prop = {
  id: string;
  name: string;
  address: string;
  classify: string;
  score: number;
  price: number;
  image: string;
};

const SugDirection = (prop: Prop) => {
  return (
    <a
      className="transition-all duration-200 w-64 rounded my-4 hover:scale-105"
      href={`/information?id=${prop.id}&type=direction`}
    >
      <div className="w-64 h-64 overflow-hidden mx-auto rounded-md">
        <img
          className="w-full h-full object-cover rounded-md"
          src={prop.image}
          alt={prop.name}
        />
      </div>
      <div className="w-64 mx-auto">
        <div className="text-xl mb-4 mt-8">
          <h1 className="font-bold mb-2 truncate">{prop.name}</h1>
          <div className="mb-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="w-4 mt-1 mr-2 inline float-left text-green-300"
            />
            <p className="truncate">{prop.address}</p>
          </div>
          <div className="mb-2">
            <FontAwesomeIcon
              icon={faFilter}
              className="w-4 mt-1 mr-2 inline float-left text-green-300"
            />
            <p className="block truncate">{prop.classify}</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-2 pb-2">
          <div>
            <FontAwesomeIcon
              icon={faStar}
              className="w-4 mr-2 inline-block text-green-300"
            />
            <p className="inline-block">{prop.score}/5</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="w-4 mr-2 inline-block text-green-300"
            />
            <p className="inline-block">{formatCurrency(prop.price)}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SugDirection;
