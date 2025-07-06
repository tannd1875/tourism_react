import { useState, useEffect } from "react";

const getLocalValue = (key: string, initValue: unknown = "") => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return initValue;
};

const useLocalStorage = (key: string, initValue?: unknown) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = (newValue: object) => {
    const currentValue = JSON.parse(value);
    const newObj = JSON.stringify({
      ...currentValue,
      ...newValue,
    });
    setValue(newObj);
  };
  return [value, setValue, updateValue];
};
export default useLocalStorage;
