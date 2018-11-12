import { useCallback } from "react";
import useInput from "./useInput";

const VALID_COLORS_CHAR_CODES = Array.from("#0123456789abcdefABCDEF").map(c => c.charCodeAt(0));

function useColorInput(initialValue: string) {
  const input = useInput(initialValue);
  const onKeyPress = useCallback(
    (evt: React.KeyboardEvent) => {
      const isHash = evt.charCode === VALID_COLORS_CHAR_CODES[0];
      const cursorPosition = (evt.target as any).selectionStart || 0;

      if (
        !VALID_COLORS_CHAR_CODES.includes(evt.charCode) ||
        (isHash && (cursorPosition !== 0 || input.value.includes("#")))
      ) {
        evt.preventDefault();
      }
    },
    [input.value]
  );

  return { ...input, onKeyPress };
}

export default useColorInput;
