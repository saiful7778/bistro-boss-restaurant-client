import useAuth from "@/hooks/useAuth";
import { Spinner } from "keep-react";
import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useAuth();
  if (loader) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <Spinner color="info" size="xl" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/authentication/sign-in" state={{ from: location }} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
