import React from "react";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MainLayout } from ".";

afterEach(cleanup);

test("should render correctly", () => {
  const { asFragment } = render(<MainLayout />);
  expect(asFragment()).toMatchSnapshot();
});
