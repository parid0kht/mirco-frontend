import React, { useState } from "react";
import ReactDOM from "react-dom";
import Input from "./Input";
import "./index.scss";

const App = () => {
  const [value, setValue] = useState("");
  return <Input value={value} onChange={setValue} id="1" />;
};
ReactDOM.render(<App />, document.getElementById("app"));
