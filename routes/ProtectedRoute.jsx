import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { accessToken } = useSelector((s) => s.auth);

  //   console.log(accessToken, "accessToken");

  if (!accessToken) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
