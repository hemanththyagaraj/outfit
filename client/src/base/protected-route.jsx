import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Fallback from "../components/views/fallback/fallback";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(state => (state.auth))
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Suspense fallback={<Fallback />}>
            <Component {...props} />
          </Suspense>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
