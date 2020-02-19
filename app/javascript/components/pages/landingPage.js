import React from "react";
import {Jumbotron, Row, Button, Link} from 'reactstrap'
import PickleGreen from 'images/picklegreen.svg';
import BottleIcon from "images/beericon.svg"

const NotSignedInLanding = () => {

    const title = {"textAlign": "center", "color": "#56CC9D"}
    const text = {"textAlign": "center"}
    const center = {"justifyContent": "center"}
    const jumbotron = { "borderWidth": "0.4rem", "background": "white"}
    return(
        <div>
             <Jumbotron className="card border-warning mb-3" style={jumbotron}>
               <h4 className="display-3" style={text} >Welcome to ferm-cal!</h4>
               <Row style={center}>
               <img src={PickleGreen} /><img src={BottleIcon}/>
               </Row>
                <p className="lead" style={text}>The ultimate task list management system for new & experienced fermentationists. </p>

                <p className="lead" style={text}>Just create new batches of beer and pickles and the app automatically generates tasks and reminders. You can now easily keep your batch notes and statuses organized. </p>
               <hr className="my-2" />
                <a href="users/sign_up" style={{ textDecoration: 'none' }}> <Button type="button" className="btn btn-info btn-lg btn-block">Sign up & have a batchin' good time!</Button> </a>
            </Jumbotron>


        </div>

    )
}

export default NotSignedInLanding;
