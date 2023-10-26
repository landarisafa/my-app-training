import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  isAuth: boolean;
  component: React.ElementType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuth, component: Component, ...rest }) => {
  return isAuth ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;