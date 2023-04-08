import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

interface PrivateRouteProps {
  children: React.ReactElement;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // get user from store
  const { user } = useSelector((state: RootState) => state.user);

  return user.email ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
