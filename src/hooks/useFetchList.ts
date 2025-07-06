import { useEffect, useState } from "react";
import api from "../services/axios";
import { API, Data } from "../types/hooks";

const useFetchList = ({ path, query, config }: API): [Data, number] => {
  const [data, setData] = useState<Data>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const queryString = new URLSearchParams({ ...query }).toString();
      const searchString = queryString ? `${path}/?${queryString}` : path;

      console.log(searchString);

      const res = await api.get(searchString, config);
      setData(res.data.data as Data);
      setTotal(res.data.total);
    };
    fetchData();
  }, [path, JSON.stringify(query), JSON.stringify(config)]);
  return [data, total];
};

export default useFetchList;
