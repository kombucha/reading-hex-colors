import { useCallback } from "react";
import useInput from "./useInput";

const VALID_COLORS_CHAR_CODES = Array.from("#0123456789abcdefABCDEF").map(c => c.charCodeAt(0));

function useColorInput<T>(initialValue: T) {
  const input = useInput(initialValue);
  const onKeyPress = useCallback((evt: React.KeyboardEvent) => {
    if (!VALID_COLORS_CHAR_CODES.includes(evt.charCode)) {
      evt.preventDefault();
    }
  }, []);

  return { ...input, onKeyPress };
}

export default useColorInput;
