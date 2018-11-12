import { useState, useCallback } from "react";

function useInput<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(evt => setValue(evt.target.value), []);

  return { onChange, value };
}

export default useInput;
