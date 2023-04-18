import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import Swal from "sweetalert2";

interface PrivateRouteProps {
  children: React.ReactElement;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

  const location = useLocation();

  const showNotification = () => {
    Swal.fire({
      title: "Ooops!",
      icon: "info",
      text: "To access this, you have to login first!!!",
      focusConfirm: true,
      confirmButtonText: "Ok",
    });
  };

  // get user from store
  const { user } = useSelector((state: RootState) => state.user);

  if (user.email) {
    return children;
  } else {
    showNotification();
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
};

export default PrivateRoute;
