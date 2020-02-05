//renders when user = signed in

import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Container
} from 'react-bootstrap';


const Dashboard = () => {

    return (
        <Container>
            <div className="card">

                <div className="card-body">
                    <h4 className="card-title">Tasky Boi</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">task one: time remaining</li>
                            <li className="list-group-item">task two</li>
                            <li className="list-group-item">task three</li>
                        </ul>
                </div>
            </div>
            <br/>
            <button type="button" className="btn btn-secondary">Create New Task</button>
        </Container>


    )
}
export default Dashboard;
