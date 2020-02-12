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
    Row,
    Button
} from 'reactstrap'
import { Link } from "react-router-dom";


// const BatchShow = (props) => {
class BatchShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            batch: []
        }
    }
    render () {
        const id  = this.props.match.params.id
        const batch = this.props.batches.find((batch) => batch.id == parseInt(id))

    return(
        <div>
            <Row>
                <Col sm ="6">
                    <Card className="card text-warning bg-warning mb-3">
                        <CardBody>
                            <CardTitle className="card-title text-white"><h2>{batch.name}</h2></CardTitle>
                            <CardSubtitle className="card-title text-white">Start Date: {batch.start_date}</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Row>
                        <Link to="/newbatch"  style={{ textDecoration: 'none' }}>
                            <Button type="button" className="btn btn-secondary btn-lg" onClick={() => {this.props.updateBatch(batch)}}>Edit</Button>
                        </Link>
                        <Link to="/newbatch"  style={{ textDecoration: 'none' }}>
                            <Button type="button" className="btn btn-secondary btn-lg" onClick={() => {this.props.deleteBatch(batch)}}>Delete</Button>
                        </Link>
                    </Row>


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




    )}
}

export default BatchShow;

//adding notes soon
// <ul className="list-group list-group-flush">
//     {batch.notes.map((note,index)=> {
//         return(
//
//             <li key={index} className="list-group-item">
//                 <h4>{note.date}: {note.note}</h4>
//             </li>
//         )
//     })}
// </ul>
