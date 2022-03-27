import React, { ReactNode } from "react";
import photosArr from "./utils/photosUtil";
interface Props {}


class Photos extends React.Component {
    constructor(props: Props) {
        super(props)
    }

    render() {
        let photos = photosArr;
    
        return( 
            <ul className="photos" id="Photos">
                {photos.map((photo: string, i: number) => <li key={i}><img className="photo" src={photo}></img></li>)}
            </ul>
        )
    }
}

export default Photos;