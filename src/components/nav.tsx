import React, { MouseEvent } from "react";
import NavImage from '../images/Black Point_SF Peninsula_Coast Survey_1869.png';
class Nav extends React.Component {
   
    render() {
        const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const button: HTMLButtonElement = e.currentTarget;
            let name = button.textContent?.toLowerCase().replace('s', '');
           if (name) {
                let ele = document.getElementById(name);
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
        }
        return( 
        <nav className="nav">
            <img src={NavImage} className="headerImg" ></img>
            <h1 className="title">Blackpoint Cigar Club</h1>
            <div className="btnContainer">
                <button className="aboutSwipe" id="aboutSwipe" onClick={handleClick}>About</button>
                <button className="photoSwipe" id="photoSwipe" onClick={handleClick}>Photos</button>
                <button className="infoSwipe" id="infoSwipe" onClick={handleClick}>Info</button>
            </div>
        </nav>
        )
        
    }
}

export default Nav;