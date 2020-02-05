//renders when user = signed in

import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Container,
    Row,
    Button,
    Col
} from 'reactstrap';


const Dashboard = () => {

    return (
        <Container>
            <Row>
                <Col sm="6">
                    <div className="card" class="card text-warning bg-warning mb-3">
                        <div className="card-body">
                            <h4 className="card-title text-white">Tasky Boi</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">task one: time remaining</li>
                                    <li className="list-group-item">task two</li>
                                    <li className="list-group-item">task three</li>
                                </ul>
                        </div>
                    </div>
                </Col>
                <Col sm="6">
                    <div className="card" class="card text-info bg-info mb-3" >
                        <div className="card-body">
                            <h4 className="card-title text-white" >Active Boi</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">light beer batch</li>
                                    <li className="list-group-item">moms beer batch</li>
                                    <li className="list-group-item">dark beer batch</li>
                                </ul>
                            </div>
                        </div>
                    <Row>
                        <Col>
                        <Button type="button" className="btn btn-secondary btn-lg btn-block" >Create New Batch!</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard;
