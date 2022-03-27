import React from "react";

interface Props {}

class About extends React.Component {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return( 
        <section className="about" id="About">
           <article>
                Located across the street from Aquatic Park with breathtaking views of the San Francisco Bay,  
                Black Point Cigar Club operates as an exclusive private cigar club and special event space. 
                The club is named after Black Point, the northernmost peak on the San Francisco mainland. 
                Black Point is the last remaining section of original coastline in the city east of the Golden Gate Bridge.
            </article>
        </section>
        )
    }
}

export default About;