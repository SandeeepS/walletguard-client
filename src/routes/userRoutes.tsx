import type { RouteObject } from "react-router-dom";
import HomePage from "../pages/user/HomePage";

const userRoutes: RouteObject[] = [
  { index: true, path: "/", element: <HomePage /> },
];

export default userRoutes;
