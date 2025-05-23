import TipCard from "./TipCard";
import { Tip } from "../../types/type";

const ListTip = ({ tips }: { tips: Tip[] }) => {
  return (
    <div className="flex justify-between items-center">
      {tips.map((tip) => (
        <TipCard
          key={tip._id}
          title={tip.title}
          cover={tip.images[0]}
          _id={tip._id}
        />
      ))}
    </div>
  );
};

export default ListTip;
