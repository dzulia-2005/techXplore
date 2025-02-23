import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";

type PrivateRouteProps = {
  children?: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;
