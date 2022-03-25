import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav"
import About from "./components/about";
import "./styles/main.css";

const App = () => <div><Nav /><About /></div>;

ReactDOM.render(<App />, document.getElementById("root"))