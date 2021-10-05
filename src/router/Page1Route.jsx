import { Page1 } from "../Page1";
import { Page1b } from "../Page1b";

export const page1route = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/a",
    exact: false,
    children: <Page1 />
  },
  {
    path: "/b",
    exact: false,
    children: <Page1b />
  }
];
