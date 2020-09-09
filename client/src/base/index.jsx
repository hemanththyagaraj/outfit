import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import ProtectedRoute from "./protected-route";
import './style.css'

const OutfitBase = () => {
  return (
    <div className="outfit__base">
      <Switch>
        {routes.map((route) => {
          const { isProtected = false, component, path } = route;
          return !isProtected ? (
            <Route key={path} exact path={path} component={component} />
          ) : (
            <ProtectedRoute key={path} { ...route } />
          );
        })}
        <Route />
      </Switch>
    </div>
  );
};

export default OutfitBase;
