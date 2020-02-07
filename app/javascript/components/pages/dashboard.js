//renders when user = signed in

import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardBody,
    CardSubtitle
} from 'reactstrap';


const Dashboard = (props) => {
    let { batches, tasks } = props
console.log(props)
    return (
        <Container>
            <Row>
                <Col sm ="6">
                    <Card className="card text-warning bg-warning mb-3" id= "tasks upcoming">
                        <CardBody>
                            <CardTitle className="card-title text-white"><h2>Upcoming Tasks</h2></CardTitle>
                                <ul className="list-group list-group-flush">
                                    {tasks.map((task,index)=> {
                                        return(
                                            <li key={index} className="list-group-item">
                                                <h4>{task.start_date}: {task.description}</h4>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </CardBody>
                    </Card>
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
