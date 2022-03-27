import React from "react";
import NavImage from '../images/Black Point_SF Peninsula_Coast Survey_1869.png'
interface Props {}
interface State {
    
}
class Nav extends React.Component {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return( 
        <nav className="nav">
            <img src={NavImage} className="headerImg" ></img>
            <p className="title">Blackpoint Cigar Club</p>
            <div className="btnContainer">
                <button className="aboutSwipe">About</button>
                <button className="photoSwipe">Photos</button>
                <button className="infoSwipe">Info</button>
            </div>
        </nav>
        )
        
    }
}

export default Nav;