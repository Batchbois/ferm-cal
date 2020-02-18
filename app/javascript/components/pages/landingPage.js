import React from "react";
import {Jumbotron, Button, Link} from 'reactstrap'

const NotSignedInLanding = () => {
    return(
        <div>
             <Jumbotron>
               <h1 className="display-3">Welcome to ferm-cal!</h1>
               <p className="lead">The ultimate task list management system for new or experienced fermentationists. Just create new batches of beer and pickles and the app automatically generates tasks and reminders. You can now easily keep your batch notes and statuses organized. </p>
               <hr className="my-2" />
              
                <a href="users/sign_up" style={{ textDecoration: 'none' }}> <Button type="button" className="btn btn-info btn-lg btn-block">Sign up & have a batchin' good time!</Button> </a>

            </Jumbotron>
        </div>

    )
}

export default NotSignedInLanding;
