import React from 'react';
import {
    Container,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import { markTaskDone } from '../apiCalls.js'
import Checkmark from 'images/checkmark.png'
import '../../../assets/stylesheets/checkmark.css'

const Tasks = (props) => {
    const markTaskCompleted = (e) => {
        let task = props.tasks.find(v => v.id === +e.target.id)
        markTaskDone(task)
        props.completeTask(task)
    }

    console.log(props)
    let { tasks, batches } = props
    return(
        <Container>
            <Card className="card text-secondary bg-secondary mb-3" >
                <CardBody>
                    <CardTitle className="card-title text-white"><h2>Upcoming Tasks</h2></CardTitle>
                        <ul className="list-group list-group-flush" id= "tasks-upcoming">
                            {tasks.map((task,index)=> {
                                return(
                                    <li key={index} className="list-group-item">
                                        <Row>
                                        <Col sm={8}>
                                            <h5>Due: {new Date(task.due).toDateString()} {task.title}</h5>
                                            <h5>Belongs to {batches.find(b => b.id === task.batch_id).name}</h5>
                                            <h6>{task.description}</h6> 
                                        </Col>
                                        <Col sm={4}>
                                            {task.completed
                                                ? <h6 align="right">Completed!</h6>
                                                : <img id={task.id}
                                                    className='checkmark'
                                                    align="right"
                                                    src={Checkmark}
                                                    onClick={markTaskCompleted}
                                            />}
                                        </Col>
                                        </Row>
                                    </li>
                                )
                            })}
                        </ul>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Tasks;
