import React from 'react';
import {
    Container,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const Tasks = (props) => {
    let { tasks } = props
    return(
        <Container>
            <Card className="card text-secondary bg-secondary mb-3" >
                <CardBody>
                    <CardTitle className="card-title text-white"><h2>Upcoming Tasks</h2></CardTitle>
                        <ul className="list-group list-group-flush" id= "tasks-upcoming">
                            {tasks.map((task,index)=> {
                                return(
                                    <li key={index} className="list-group-item">
                                        <h5>Due: {new Date(task.due).toDateString()}</h5>
                                        <h5>{task.title}</h5>
                                        <h6> {task.description} </h6>
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
