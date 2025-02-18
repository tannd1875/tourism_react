import SugTip from "./SuggestedTip";
import { tipType } from "../types/type";

type Prop = {
  ListTip: tipType[];
};

const ListTips = ({ ListTip }: Prop) => {
  return (
    <div className="flex justify-between items-center gap-[50px] ml-[16px]">
      {ListTip.map((tip) => (
        <SugTip
          key={tip._id}
          title={tip.title}
          image={tip.images[0]}
          id={tip._id}
        ></SugTip>
      ))}
    </div>
  );
};

export default ListTips;
