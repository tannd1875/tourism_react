import { useState } from "react";

export type QueryUpdater = (newQuery: object) => void;
export type QueryResetter = () => void;

const useQuery = (initial: object): [object, QueryUpdater, QueryResetter] => {
  const [query, setQuery] = useState(initial);

  const updateQuery = (newQuey: object) => {
    setQuery((prev: object) => ({
      ...prev,
      ...newQuey,
    }));
  };

  const resetQuery = () => {
    setQuery(initial);
  };

  return [query, updateQuery, resetQuery];
};

export default useQuery;
