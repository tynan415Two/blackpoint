import React from "react";

interface Props {}

class Info extends React.Component {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return( 
        <section className="info" id="info">
           <h2>Rentals</h2>
           <p>Black Point Cigar Club is available for rentals starting at $150/hour, 4 hours minimum. Seasonal catering is available for an additional fee.</p>
           <h2>Membership</h2>
           <p>Private memberships are available for $300/month.</p>
           <h2>Contact</h2>
           <p>blackpointcigarclub@gmail.com</p>
        </section>
        )
    }
}

export default Info;