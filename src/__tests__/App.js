import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import useApp from "../useApp";
import { renderHook, act } from '@testing-library/react-hooks';

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should render loader then remove it", () => {
   
  });
})