import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

import "./index.scss";

const App = () => <List postId={3} />;
ReactDOM.render(<App />, document.getElementById("app"));
