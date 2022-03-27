import React from "react";
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

    handleClick(e: { preventDefault: () => void; target: { textContent: any; }; }) {
        e.preventDefault();
        let name = e.target.textContent;
        console.log(name)

        if (name === "About") {

        } else if (name === "Photos") {

        } else if(name === "Info") {

        }

    }

    render() {
        return( 
        <nav className="nav">
            <img src={NavImage} className="headerImg" ></img>
            <p className="title">Blackpoint Cigar Club</p>
            <div className="btnContainer">
                <button className="aboutSwipe" onClick={this.handleClick}>About</button>
                <button className="photoSwipe" onClick={this.handleClick}>Photos</button>
                <button className="infoSwipe" onClick={this.handleClick}>Info</button>
            </div>
        </nav>
        )
        
    }
}

export default Nav;