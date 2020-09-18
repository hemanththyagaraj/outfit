import React from "react";
import Navbar from "./components/layouts/navbar/navbar";
import OutfitBase from "./base";
import { BrowserRouter as Router } from "react-router-dom";
import setAuthToken from "./config/set-auth-token";

function App() {
  //set global token for all protected requests
  setAuthToken();

  return (
    <Router>
      <Navbar />
      <OutfitBase />
    </Router>
  );
}

export default App;
