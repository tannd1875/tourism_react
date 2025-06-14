import { useState } from "react";

type QueryUpdater = (newQuery: object) => void;
type QueryResetter = () => void;
type QueryEmpty = () => void;

const useQuery = (
  initial: object
): [object, QueryUpdater, QueryResetter, QueryEmpty] => {
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

  const emptyQuery = () => {
    setQuery({});
  };

  return [query, updateQuery, resetQuery, emptyQuery];
};

export default useQuery;
