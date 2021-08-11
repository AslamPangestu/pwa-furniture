import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./pages/Home";
import ProfileScreen from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/profile" exact component={ProfileScreen} />
    </Router>
  );
};

export default App;
