import React from "react";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { AsideMenu } from ".";

afterEach(cleanup);

test("should render correctly", () => {
  const { asFragment } = render(<AsideMenu />);
  expect(asFragment()).toMatchSnapshot();
});
