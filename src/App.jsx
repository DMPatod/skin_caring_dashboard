import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";

const App = () => (
  <div className="container">
    <div>Skin Caring Dashboard</div>
    <Button />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
