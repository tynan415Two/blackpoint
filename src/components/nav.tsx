import React, { MouseEvent } from "react";
import NavImage from '../images/Black Point_SF Peninsula_Coast Survey_1869.png';

interface Props {};
// type selected = "About" | "Photos" | "Info";

class Nav extends React.Component {
    constructor(props: Props) {
        super(props)
        this.state = {
            selected: "About",
        }
    }

    

    render() {
        const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const button: HTMLButtonElement = e.currentTarget;
            let name = button.textContent;
           if (name) {
                let ele = document.getElementById(name);
                if (ele !== null) {
                    ele.style.display = "block";
                    if (name === "About") {
                        let off1 = document.getElementById("Photos")
                        if (off1 !== null) {
                            off1.style.display = "none";
                        }
                        // let off2 = document.getElementById("Info")
                        // if (off2 !== null) {
                        //     off2.style.display = "none";
                        // }
                    } else if (name === "Photos") {
                        let off1 = document.getElementById("About")
                        if (off1 !== null) {
                            off1.style.display = "none";
                        }
                        // let off2 = document.getElementById("Info")
                        // if (off2 !== null) {
                        //     off2.style.display = "none";
                        // }
                    } else if(name === "Info") {
                        // document.getElementById("About").style.display = "none";
                        // document.getElementById("Photos").style.display = "none";
                    }
                }
            }
        }
        return( 
        <nav className="nav">
            <img src={NavImage} className="headerImg" ></img>
            <p className="title">Blackpoint Cigar Club</p>
            <div className="btnContainer">
                <button className="aboutSwipe" onClick={handleClick}>About</button>
                <button className="photoSwipe" onClick={handleClick}>Photos</button>
                <button className="infoSwipe" onClick={handleClick}>Info</button>
            </div>
        </nav>
        )
        
    }
}

export default Nav;