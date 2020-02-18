import Kimberly from "images/kimberly.jpg";
import Samuel from "images/samuel.jpg";
import React from 'react';

import {
    Container
} from 'reactstrap';

const AboutUs = () => {
    return(
        <Container>
            <h1> FermCal </h1>
                <br/>
            <h4> We are a beautiful team of sweet students </h4>
            <img src= {Kimberly} alt="Kimberly"/>
            <img src= {Samuel} alt="Samuel"/>
        </Container>
    )
}

export default AboutUs;
