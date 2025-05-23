import { Direction } from "../types/type";

import DirectionItem from "../features/direction-card/Direction";

const DirectionList = ({ items }: { items: Direction[] }) => {
  return (
    <>
      <div className="lg:w-2/3 grow mx-2 lg:ml-6">
        {items.length == 0 ? (
          <p className="italic">Không có kết quả phù hợp nào được tìm thấy</p>
        ) : (
          items.map((item) => {
            return <DirectionItem item={item} key={item._id} />;
          })
        )}
      </div>
    </>
  );
};

export default DirectionList;
