import React, { MouseEvent } from "react";
import NavImage from '../images/Black Point_SF Peninsula_Coast Survey_1869.png';
import photosArr from "./utils/photosUtil";

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const slider = document.getElementById('root');
let selectedArr = ["about", "photo", "info"];
let idx = 0;
function handleGesture() {
    let current = selectedArr[idx];
    if (touchendX < touchstartX + 15 && Math.abs(touchstartY - touchendY) < 15) {
        idx < selectedArr.length -1 ? idx++ : idx;
    }
    if (touchendX > touchstartX -15 && Math.abs(touchstartY - touchendY) < 15) {
        idx > 0 ? idx-- : idx;
    }
    let name = selectedArr[idx];
    let ele = document.getElementById(name);
    let selChange = document.getElementById(name + "Swipe");
    if (ele !== null && selChange !== null) {
        let order = selectedArr.indexOf(current) < selectedArr.indexOf(name) ? "forward" : "backward";

        ele.style.display = "block";
        setTimeout(() => {
            ele.style.opacity = "1";
        }, 750)
        selChange.style.color = "white"

        let off1 =  document.getElementById(current);
        let colChange1 = document.getElementById(current + "Swipe");
        if (off1 !== null && colChange1 !== null) {
            off1.style.opacity = "0";
            setTimeout(() => {
                off1.style.display = "none";
            }, 501)
            colChange1.style.color = "darkgray";
        }
    }
    
}


slider?.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  touchstartY = e.changedTouches[0].screenY
})

slider?.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  touchendY = e.changedTouches[0].screenY
  const targ = e.target as HTMLTextAreaElement
  if(e.targetTouches.length == 2) return
  if (targ.id === "email") return
  if (touchstartX === touchendX || Math.abs(touchstartX - touchendX) < 25) return
  handleGesture()
})
class Nav extends React.Component {
  
    handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const button: HTMLButtonElement = e.currentTarget;
        let name = button.textContent?.toLowerCase().replace('s', '');
        if (name) {
            idx = selectedArr.indexOf(name);

            let ele = document.getElementById(name);
            let selChange = document.getElementById(name + "Swipe");
            if (ele !== null && selChange !== null) {
                ele.style.display = "block";
                setTimeout(() => {
                    ele.style.opacity = "1";
                }, 502)
                selChange.style.color = "white"
                if (name === "about") {
                    let off1 = document.getElementById("photo")
                    let colChange1 = document.getElementById("photoSwipe")
                    if (off1 !== null && colChange1 !== null) {
                        off1.style.opacity = "0";
                        setTimeout(() => {
                            off1.style.display = "none";
                        }, 501)
                        colChange1.style.color = "darkgray";
                    }
                    let off2 = document.getElementById("info")
                    let colChange2 = document.getElementById("infoSwipe")
                    if (off2 !== null && colChange2 !== null) {
                        off2.style.opacity = "0";
                        setTimeout(() => {
                            off2.style.display = "none";
                        }, 501)
                        colChange2.style.color = "darkgray";
                    }
                } else if (name === "photo") {
                    let off1 = document.getElementById("about")
                    let colChange1 = document.getElementById("aboutSwipe")
                    if (off1 !== null && colChange1 !== null) {
                        off1.style.opacity = "0";
                        setTimeout(() => {
                            off1.style.display = "none";
                        }, 501)
                        colChange1.style.color = "darkgray";
                    }
                    let off2 = document.getElementById("info")
                    let colChange2 = document.getElementById("infoSwipe")
                    if (off2 !== null && colChange2 !== null) {
                        off2.style.opacity = "0";
                        setTimeout(() => {
                            off2.style.display = "none";
                        }, 501)
                        colChange2.style.color = "darkgray";
                    }
                } else if(name === "info") {
                    let off1 = document.getElementById("about")
                    let colChange1 = document.getElementById("aboutSwipe")
                    if (off1 !== null && colChange1 !== null) {
                        off1.style.opacity = "0";
                        setTimeout(() => {
                            off1.style.display = "none";
                        }, 501)
                        colChange1.style.color = "darkgray";
                    }
                    let off2 = document.getElementById("photo")
                    let colChange2 = document.getElementById("photoSwipe")
                    if (off2 !== null && colChange2 !== null) {
                        off2.style.opacity = "0";
                        setTimeout(() => {
                            off2.style.display = "none";
                        }, 501)
                        colChange2.style.color = "darkgray";
                    }
                }
            }
        }
    }
    render() {
        let photos = photosArr;
        return(
        <div>
            <nav className="nav">
                <img src={NavImage} className="headerImg" ></img>
                <h1 className="title">Black Point Cigar Club</h1>
                <div className="btnContainer">
                    <button className="aboutSwipe" id="aboutSwipe" onClick={this.handleClick}>About</button>
                    <button className="photoSwipe" id="photoSwipe" onClick={this.handleClick}>Photos</button>
                    <button className="infoSwipe" id="infoSwipe" onClick={this.handleClick}>Info</button>
                </div>
            </nav>
            <section className="about" id="about">
                <article>
                Located across the street from Aquatic Park with breathtaking views of the San Francisco Bay,  
                Black Point Cigar Club operates as an exclusive private cigar club and special event space. 
                The club is named after Black Point, the northernmost peak on the San Francisco mainland. 
                Black Point is the last remaining section of original coastline in the city east of the Golden Gate Bridge.
                </article>
            </section>

            <ul className="photos" id="photo">
                {photos.map((photo: string, i: number) => <li key={i}><img className="photo" src={photo}></img></li>)}
            </ul>

            <section className="info" id="info">
                <h2>Rentals</h2>
                <p>Black Point Cigar Club is available for rentals starting at $150/hour, 4 hours minimum. Seasonal catering is available for an additional fee.</p>
                <h2>Membership</h2>
                <p>Private memberships are available for $300/month.</p>
                <h2>Contact</h2>
                <p id="email">blackpointcigarclub@gmail.com</p>
            </section>

            <footer className="footer"></footer>
        </ div>
        )
        
    }
}

export default Nav;