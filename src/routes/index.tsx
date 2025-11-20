import NotFound from "../components/common/NotFound";
import userRoutes from "./userRoutes";

export const appRoutes = [...userRoutes, { path: "*", element: <NotFound /> }];
