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
                                                <h4>{task.date}: {task.description}</h4>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </CardBody>
                    </Card>
                </Col>

            <Col sm="6">
                    <Card className="card text-info bg-info mb-3" id= "batches">
                        <CardBody>
                            <CardTitle className="card-title text-white"><h2>Batches</h2></CardTitle>
                                <ul className="list-group list-group-flush">
                                    {batches.map((batch,index)=> {
                                        return(
                                            <li key={index} className="list-group-item">
                                                <Link to={`/batches/${batch.id}`}>
                                                    <h4>{batch.name} </h4>
                                                </Link>
                                                <h6>{batch.ferment} Start: {batch.start_date}</h6>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </CardBody>
                    </Card>
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
