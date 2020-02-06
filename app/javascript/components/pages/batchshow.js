import React from "react"
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText,
    Container,
    Navbar,
    NavbarText,
    Col,
    Row
} from 'reactstrap'
import Delete from 'images/delete.svg'

const BatchShow = (props) => {
    const { id } = props.match.params
    const batch = props.batches.find((batch) => batch.id == parseInt(id))

    return(
        <div>
            <Row>
                <Col sm ="6">
                    <Card className="card text-warning bg-warning mb-3">
                        <CardBody>
                            <CardTitle className="card-title text-white"><h2>{batch.name}</h2></CardTitle>
                            <CardSubtitle className="card-title text-white">Start Date: {batch.start_date}</CardSubtitle>

                                <ul className="list-group list-group-flush">
                                    {batch.notes.map((note,index)=> {
                                        return(

                                            <li key={index} className="list-group-item">
                                                <h4>{note.date}: {note.note}</h4>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card className="card text-info bg-info mb-3">
                        <CardBody>
                            <CardTitle className="card-title text-white"><h2>Tasks</h2></CardTitle>
                                <ul className="list-group list-group-flush">
                                    {batch.tasks.map((task,index)=> {
                                        return(
                                            <li key={index} className="list-group-item">
                                                <h4>{task.due}: {task.title}</h4>
                                            </li>
                                        )
                                    })}
                                </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>




    )
}

export default BatchShow;
