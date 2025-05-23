import ListDirection from "../features/suggested-card/ListDirection";
import ListTip from "../features/suggested-card/ListTip";
import { Slider } from "../types/type";

const SuggestedList = ({ slideList, type }: Slider) => {
  return (
    <div className="relative mb-4 border-y-2 w-full overflow-hidden px-4">
      <div className={`transition-transform duration-500 w-full`}>
        {type == "tip" ? (
          <ListTip tips={slideList} />
        ) : (
          <ListDirection directions={slideList} />
        )}
      </div>
    </div>
  );
};

export default SuggestedList;
