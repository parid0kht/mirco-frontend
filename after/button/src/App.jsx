import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./index.scss";

const App = () => <Button onClick={() => alert("Hi there!")} />;

ReactDOM.render(<App />, document.getElementById("app"));
