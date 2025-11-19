import type { RouteObject } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import Layout from "../pages/user/Layout";

const userRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default userRoutes;
