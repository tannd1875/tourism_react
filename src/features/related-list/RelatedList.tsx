import Button from "../../components/Button";
import { fetchDirectionList, fetchTipList } from "../../services/api";
import { Direction, RelatedListType, Tip } from "../../types/type";
import { useEffect, useState } from "react";

const RelatedList = ({ currInfo, title, type }: RelatedListType) => {
  const [data, setData] = useState<Array<Direction | Tip>>([]);

  useEffect(() => {
    const getData = async () => {
      let data = [];
      if (type === "direction") {
        data = await fetchDirectionList();
      } else {
        data = await fetchTipList();
      }
      const newData = data.filter((dt) => dt.title != currInfo).slice(0, 3);
      setData(newData);
    };
    getData();
  }, [currInfo, type]);
  return (
    <div className="w-1/3">
      <span className="text-xl text-l font-bold block mb-8">{title}</span>
      {data.map((dt) => (
        <Button
          key={dt._id}
          variant="related_list"
          to={`/information?id=${dt._id}&type=${type}`}
        >
          {dt.title}
        </Button>
      ))}
    </div>
  );
};

export default RelatedList;
