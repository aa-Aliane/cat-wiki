import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e, name) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: e,
    }));
  };
  return [value, onChange];
};


