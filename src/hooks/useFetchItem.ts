import { useEffect, useState } from "react";
import api from "../services/axios";
import { API, Item } from "../types/hooks";

const useFetchItem = ({ path, query, config }: API) => {
  const [data, setData] = useState<Item>();

  useEffect(() => {
    const fetchData = async () => {
      const queryString = new URLSearchParams({ ...query }).toString();
      const searchString = queryString ? `${path}/?${queryString}` : path;
      console.log(searchString);
      const res = await api.get(searchString, config);
      setData(res.data as Item);
    };
    fetchData();
  }, [path, JSON.stringify(query), JSON.stringify(config)]);
  return [data];
};

export default useFetchItem;
