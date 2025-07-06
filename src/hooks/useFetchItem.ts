import { useEffect, useState } from "react";
import api from "../services/axios";
import { API, Item } from "../types/hooks";

const useFetchItem = ({
  path,
  query,
  config,
}: API): [Item, boolean, Error | null] => {
  const [data, setData] = useState<Item>({} as Item);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryString = new URLSearchParams({ ...query }).toString();
        const searchString = queryString ? `${path}/?${queryString}` : path;
        const res = await api.get(searchString, config);
        setData(res.data as Item);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [path, JSON.stringify(query), JSON.stringify(config)]);

  return [data, loading, error];
};

export default useFetchItem;
