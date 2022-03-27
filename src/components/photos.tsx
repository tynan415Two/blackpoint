import React, { ReactNode } from "react";
import photosArr from "./utils/photosUtil";
class Photos extends React.Component {
  
    render() {
        let photos = photosArr;
    
        return( 
            <ul className="photos" id="photo">
                {photos.map((photo: string, i: number) => <li key={i}><img className="photo" src={photo}></img></li>)}
            </ul>
        )
    }
}

export default Photos;