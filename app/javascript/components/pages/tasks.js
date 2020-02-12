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
            <Card className="card text-warning bg-warning mb-3" >
                <CardBody>
                    <CardTitle className="card-title text-white"><h2>Upcoming Tasks</h2></CardTitle>
                        <ul className="list-group list-group-flush" id= "tasks-upcoming">
                            {tasks.map((task,index)=> {
                                return(
                                    <li key={index} className="list-group-item">
                                        <h6>{task.due}: {task.description}</h6>
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
