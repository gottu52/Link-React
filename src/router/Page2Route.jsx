import { Page2 } from "../Page2";
import { URLpara } from "../URLpara";

export const page2route = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <URLpara />
  }
];
