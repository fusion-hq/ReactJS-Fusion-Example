import React from "react";
import Home from "./Home.js";
import MyProfile from "./MyProfile.js";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={MyProfile} />
      </div>
    </BrowserRouter>
  );
}
