import { useEffect, useState } from "react";

export type InputAttributes = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useInput = ({
  initial = "",
  regex,
}: {
  initial?: string;
  regex?: RegExp | string;
}): [string, InputAttributes, boolean] => {
  const [value, setValue] = useState(initial);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validate = () => {
      if (regex instanceof RegExp) {
        setIsValid((regex as RegExp).test(value));
      } else {
        setIsValid(value === regex);
      }
    };
    validate();
  }, [value, regex]);

  useEffect(() => {
    const notEmpty = () => {
      if (!value && !regex) {
        setIsValid(false);
      }
      if (value && !regex) {
        setIsValid(true);
      }
    };
    notEmpty();
  });

  const attributeObj = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue((e.target as HTMLInputElement).value),
  };

  return [value, attributeObj, isValid];
};

export default useInput;
