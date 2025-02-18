import { directionType, tipType } from "../types/type";
import { useEffect, useState } from "react";

type Prop = {
  currInfo: string;
  title: string;
  type: string;
};

const RelatedList = ({ currInfo, title, type }: Prop) => {
  const [data, setData] = useState<Array<directionType | tipType>>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/${type}`);
        if (!response.ok) {
          throw new Error("Fail to get Data");
        }
        const data: Array<directionType | tipType> = await response.json();
        const newData = data.filter((dt) => dt.title != currInfo).slice(0, 3);
        setData(newData);
      } catch (e: unknown) {
        console.log(e);
      }
    };
    getData();
  }, [currInfo, type]);
  console.log(data);
  return (
    <div className="w-2/3">
      <p className="text-xl text-l font-bold mb-4">{title}</p>
      {data.map((dt) => (
        <a
          key={dt._id}
          className="text-xl mb-2 text-justify hover:cursor-pointer hover:underline block"
          href={`/information?id=${dt._id}&type=${type}`}
        >
          {dt.title}
        </a>
      ))}
    </div>
  );
};

export default RelatedList;
