import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav"
import About from "./components/about";
import Footer from "./components/footer";
import Photos  from "./components/photos";
import Info from "./components/info";
import "./styles/main.css";

let touchstartX = 0
let touchendX = 0

const slider = document.getElementById('root')
let selectedArr = ["about", "photo", "info"];
let idx = 0;
function handleGesture() {
    if (touchendX < touchstartX) {
        idx < selectedArr.length -1 ? idx++ : idx;
    }
    if (touchendX > touchstartX) {
        idx > 0 ? idx-- : idx;
    }
    let name = selectedArr[idx];
    let ele = document.getElementById(name)
    let selChange = document.getElementById(name + "Swipe");
            if (ele !== null && selChange !== null) {
                ele.style.display = "block";
                selChange.style.color = "white"
                if (name === "about") {
                    let off1 = document.getElementById("photo")
                    let colChange1 = document.getElementById("photoSwipe")
                    if (off1 !== null && colChange1 !== null) {
                        off1.style.display = "none";
                        colChange1.style.color = "darkgray";
                    }
                    let off2 = document.getElementById("info")
                    let colChange2 = document.getElementById("infoSwipe")
                    if (off2 !== null && colChange2 !== null) {
                        off2.style.display = "none";
                        colChange2.style.color = "darkgray";
                    }
                } else if (name === "photo") {
                    let off1 = document.getElementById("about")
                    let colChange1 = document.getElementById("aboutSwipe")
                    if (off1 !== null && colChange1 !== null) {
                        off1.style.display = "none";
                        colChange1.style.color = "darkgray";
                    }
                    let off2 = document.getElementById("info")
                    let colChange2 = document.getElementById("infoSwipe")
                    if (off2 !== null && colChange2 !== null) {
                        off2.style.display = "none";
                        colChange2.style.color = "darkgray";
                    }
                } else if(name === "info") {
                    let off1 = document.getElementById("about")
                    let colChange1 = document.getElementById("aboutSwipe")
                    if (off1 !== null && colChange1 !== null) {
                        off1.style.display = "none";
                        colChange1.style.color = "darkgray";
                    }
                    let off2 = document.getElementById("photo")
                    let colChange2 = document.getElementById("photoSwipe")
                    if (off2 !== null && colChange2 !== null) {
                        off2.style.display = "none";
                        colChange2.style.color = "darkgray";
                    }
                }
            }
    
}

slider?.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

slider?.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  handleGesture()
})

const App = () => {
    return(
        <div>
            <Nav  />
            <About />
            <Photos />
            <Info />
            <Footer />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"))