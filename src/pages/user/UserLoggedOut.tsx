import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/store";

const UserLoggedOut = () => {
  const userData = useAppSelector((state) => state.auth.userData);
  if (userData) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default UserLoggedOut;
