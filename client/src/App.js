import React from "react";
import Navbar from "./components/layouts/navbar/navbar";
import OutfitBase from "./base";
import { BrowserRouter as Router } from "react-router-dom";
import setAuthToken from "./config/set-auth-token";
import AlertProvider from "./context/alert/alert-state";

function App() {
  //set global token for all protected requests
  setAuthToken();

  return (
    <Router>
      <AlertProvider>
        <Navbar />
        <OutfitBase />
      </AlertProvider>
    </Router>
  );
}

export default App;
