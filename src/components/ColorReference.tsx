import React from "react";

import { COLOR_MAP } from "../utils";
import ColorSquare from "./ColorSquare";
import ColorChart from "./ColorChart";

function ColorReference() {
  return (
    <ul className="Reference">
      {COLOR_MAP.map(c => (
        <li className="Reference_item">
          <div className="Reference_description">
            <span>
              {c.name} ({c.value}) &nbsp;
            </span>
            <ColorSquare color={c.value} size={18} />
          </div>
          <ColorChart color={c.value} />
        </li>
      ))}
    </ul>
  );
}

export default ColorReference;
