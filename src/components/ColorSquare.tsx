import React from "react";

interface Props {
  color: string;
  size?: number;
}

function ColorSquare({ color, size = 64 }: Props) {
  return <div style={{ background: color, width: size, height: size }} />;
}

export default ColorSquare;
