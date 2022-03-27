import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav"
import About from "./components/about";
import Footer from "./components/footer";
import Photos  from "./components/photos";
import Info from "./components/info";
import "./styles/main.css";


const App = () => <div><Nav /><About /><Photos /><Footer /><Info /></div>;

ReactDOM.render(<App />, document.getElementById("root"))