import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import ProtectedRoute from "./protected-route";
import Fallback from "../components/views/fallback/fallback";

const OutfitBase = () => {
  return (
    <div className="outfit__base">
      <Switch>
        {routes.map((route) => {
          const { isProtected = false, Component, path } = route;
          return !isProtected ? (
            <Route
              key={path}
              exact
              path={path}
              render={() => (
                <Suspense fallback={<Fallback />}>
                  <Component />
                </Suspense>
              )}
            />
          ) : (
            <ProtectedRoute key={path} {...route} />
          );
        })}
        <Route />
      </Switch>
    </div>
  );
};

export default OutfitBase;
