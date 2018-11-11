import { useState, useCallback } from "react";

function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(evt => setValue(evt.target.value), []);

  return { onChange, value };
}

export default useInput;
