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
    CardSubtitle,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import Checkmark from 'images/checkmark.png'
import Pickle from 'images/pickle.png'
import Beer from 'images/beer-bottle.png'
import '../../../assets/stylesheets/checkmark.css'
import { markTaskDone } from '../apiCalls'

const Dashboard = (props) => {
    let { batches, tasks } = props
    const taskSize = {"maxHeight": "500px", "overflowY": "scroll"}
    const batchSize = {"maxHeight": "450px", "overflowY": "scroll"}
    const fermentIcons = {
      pickle: Pickle,
      beer: Beer
    }

    const markCompleted = (e) => {
        markTaskDone(e.target.id)
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <Container >
            <Row>
                <Col sm ="6">
                    <Card className="card text-warning bg-warning mb-3" >
                        <CardBody>
                            <CardTitle className="card-title text-white"><h2>Upcoming Tasks</h2></CardTitle>
                                <ul className="list-group list-group-flush" id= "tasks-upcoming" style={taskSize}>
                                    {tasks.filter(v => !v.complete).map((task,index)=> {
                                        return(
                                            <li key={index} className="list-group-item" id="task-items">
                                              <Row>
                                                <Col sm={8}>
                                                  <h6>Due: {new Date(task.due).toDateString()}</h6>
                                                </Col>
                                                <Col sm={4}>
                                                  <p>
                                                    Done?
                                                    <img id={task}
                                                         className='checkmark'
                                                         align="right"
                                                         src={Checkmark}
                                                         onClick={markCompleted}
                                                    />
                                                  </p>
                                                </Col>
                                              </Row>
                                                <h6>{task.title}</h6>
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
                                <ul className="list-group list-group-flush" style={batchSize}>
                                    {batches.map((batch,index)=> {
                                        return(
                                            <li key={index} id="batch-items" className="list-group-item">
                                                <Row>
                                                  <Col sm="9">
                                                    <Link to={`/batches/${batch.id}`} style={{ textDecoration: 'none' }}>
                                                        <h4>{batch.name}</h4>
                                                    </Link>
                                                  </Col>
                                                  <Col sm='3'>
                                                    <img src={fermentIcons[batch.ferment]} height='30px' />
                                                  </Col>
                                                </Row>
                                                <h6>{batch.ferment} Start: {batch.start_date}</h6>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </CardBody>
                    </Card>
                <Row>
                    <Col>
                    <Link to="/newbatch"  style={{ textDecoration: 'none' }}> <Button type="button" className="btn btn-secondary btn-lg btn-block" >Create New Batch!</Button> </Link>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    )
}
export default Dashboard;
