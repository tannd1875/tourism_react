import ListDirection from "./ListDirection";
import ListTips from "./ListTip";
import { SliderType } from "../../types/type";

const SuggestedList = ({ slideList, type }: SliderType) => {
  return (
    <div className="relative mb-4 border-y-2 w-full overflow-hidden">
      <div className={`flex transition-transform duration-500 w-max`}>
        {type == "tip" ? (
          <ListTips ListTip={slideList}></ListTips>
        ) : (
          <ListDirection directions={slideList}></ListDirection>
        )}
      </div>
    </div>
  );
};

export default SuggestedList;
