import React from "react";
import { render } from "@testing-library/react";
import App from "app/App";

test("app renders", () => {
  const mock = render(<App />);
  expect(mock.baseElement).toBeDefined();
});
