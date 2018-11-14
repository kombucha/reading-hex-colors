import "intersection-observer";
import ResizeObserver from "resize-observer-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "reset-css";
import "./base.css";

(window as any).ResizeObserver = ResizeObserver;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
