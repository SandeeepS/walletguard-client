import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/store";

const UserLoggedIn = () => {
  const { userData } = useAppSelector((state) => state.auth);
  if (userData) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export default UserLoggedIn;
