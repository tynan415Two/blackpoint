import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav"
import About from "./components/about";
import Footer from "./components/footer";
// import Photos  from "./components/photos";
import "./styles/main.css";


const App = () => <div><Nav /><About /><Footer/></div>;

ReactDOM.render(<App />, document.getElementById("root"))