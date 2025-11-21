import type { RouteObject } from "react-router-dom";
// import HomePage from "../pages/user/HomePage";
import UserLoggedOut from "../pages/user/UserLoggedOut";
import Layout from "../pages/user/Layout";
import SignupPage from "../pages/user/SignupPage";
import LoginPage from "../pages/user/LoginPage";
import UserLoggedIn from "../pages/user/UserLoggedIn";
import HomePage from "../pages/user/HomePage";
import TransactionHistory from "../pages/user/TransactionHistory";
// import Layout from "../pages/user/Layout";

const userRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <UserLoggedOut />,
    children: [
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLoggedIn />,
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path:"/history",
            element: <TransactionHistory />
          }
        ],
      },
    ],
  },
];

export default userRoutes;
