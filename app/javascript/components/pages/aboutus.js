import Kimberly from "images/kimberly.jpg";
import Samuel from "images/samuel.jpg";
import Brenden from "images/brenden1.jpg"
import Sabrina from 'images/sabrinaport.jpg'

import React from 'react';
import {
    Card, CardImg, CardGroup, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const heading = {
    "textAlign": "justify"
}
const cardtitle = {
    "fontWeight": "900"
}
const title = {
    "textAlign": "center"
}
const kimborder = {
    "borderWidth": 5,
    "borderColor": '#FF7851'
}
const sabborder = {
    "borderWidth": 5,
    "borderColor": '#F3969A'
}
const breborder = {
    "borderWidth": 5,
    "borderColor": '#FFCE67'
}
const samborder = {
    "borderWidth": 5,
    "borderColor": '#6CC3D5'
}
const textBox = {background: "white", borderRadius: "2%", padding: 5, border: '5px solid #6CC3D5', marginBottom: 25 }

const AboutUs = () => {
    return(
        <>
            <div style={textBox}>
                <h1 style={title}>About Us</h1>
                <p style={heading}> Welcome to Ferm-Cal; we're so glad you're here.
                Ferm-Cal is a fermentation tracker and organizer developed by 4 students from LEARN Academy. Ferm-Cal contains ways to manage your fermentation batches in calendar form and sends notifications telling you what task you need to execute and when. Our team consists of Samuel Bates, Sabrina Randall , Brenden Barta and Kimberly Leonard. We are very passionate about this project and can't wait to share it with you. We strive to help you achieve your fermentation dreams!!</p>
            </div>
            <Row style={{marginBottom: "1%"}}>
                <Col md={6}>
                  <Card style={kimborder}>
                    <CardImg top width="100%" style={{borderRadius: "0%"}} src={Kimberly} alt="Kimberly" />
                        <CardBody style={title}>
                          <CardTitle style={cardtitle}>Kimberly Leonard </CardTitle>
                          <CardText>Good girl, says heck alot. lorem orem torem zorem, idk what to say.</CardText>
                          <a href="https://github.com/kimberlyleo" target="_blank" style={{ textDecoration: 'none' }}><Button color="success"  >Contact</Button> </a>
                        </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={breborder} >
                    <CardImg top width="100%" style={{borderRadius: "0%"}} src={Brenden} alt="Brenden" />
                        <CardBody style={title}>
                          <CardTitle style ={cardtitle}>Brenden Barta </CardTitle>
                          <CardText>hassavenyananashebedubeduo, is that how you say it? lorem orem torem zorem, idk what to say.</CardText>
                          <a href="https://github.com/brendenbarta" target="_blank" style={{ textDecoration: 'none' }}><Button color="success"  >Contact</Button> </a>
                        </CardBody>
                  </Card>
                </Col>
            </Row>
            <Row style={{marginBottom: "1%"}}>
                <Col md={6}>
                    <Card style={sabborder}>
                      <CardImg top width="100%" style={{borderRadius: "0%"}} src={Sabrina} alt="Sabrina" />
                          <CardBody style={title}>
                          <CardTitle style ={cardtitle}>Sabrina Randall</CardTitle>
                          <CardText>Pink hair, steals chairs for a living. lorem orem torem zorem, idk what to say.</CardText>
                          <a href="https://github.com/sabrinabanks" target="_blank" style={{ textDecoration: 'none' }}><Button color="success"  >Contact</Button> </a>
                          </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                  <Card style={samborder}>
                      <CardImg top width="100%" style={{borderRadius: "0%"}} src={Samuel} alt="Samuel" />
                          <CardBody style={title}>
                          <CardTitle style ={cardtitle}>Samuel Bates</CardTitle>
                          <CardText>sassy boy, has a beanie fetish. lorem orem torem zorem, idk what to say</CardText>
                          <a href="https://github.com/samboozle" target="_blank" style={{ textDecoration: 'none' }}><Button color="success"  >Contact</Button> </a>
                          </CardBody>
                  </Card>
                </Col>
            </Row>
        </>
    )
}
export default AboutUs;
