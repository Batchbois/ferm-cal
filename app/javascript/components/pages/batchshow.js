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
            <Card className="card text-warning bg-warning mb-3">
                                    <CardBody>
                                        <CardTitle className="card-title text-white"><h2>{batch.name}</h2></CardTitle>
                                        <CardSubtitle className="card-title text-white">{batch.start_date}</CardSubtitle>
                                        <CardText>
                                            {batch.tasks.map((task,index)=> {
                                                return(
                                                    <li key={index}>
                                                        <h4>{task.due}: {task.title}</h4>
                                                    </li>
                                                )
                                            })}
                                        </CardText>
                                    </CardBody>
                                </Card>

        </div>




    )
}

export default BatchShow;


        // <Container>
        //     <Row>
        //         <Col sm="6">
        //             <Card className="card text-warning bg-warning mb-3">
        //                 <CardBody>
        //                     <h4 className="card-title text-white">Image + Batchy Boi </h4>
        //                         <ul className="list-group list-group-flush">
        //                             <li><img src={Delete} width="30px" alt="delete"/></li>
        //                             <li className="list-group-item">task one: time remaining</li>
        //                             <li className="list-group-item">task two</li>
        //                             <li className="list-group-item">task three</li>
        //                         </ul>
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //         <Col sm="6">
        //             <Card className="card text-info bg-info mb-3" >
        //                 <CardBody>
        //                         <h4 className="card-title text-white" >Tasky Boi</h4>
        //                             <ul className="list-group list-group-flush">
        //                                 <li className="list-group-item">task one</li>
        //                                 <li className="list-group-item">task two</li>
        //                                 <li className="list-group-item">task three</li>
        //                             </ul>
        //                     </CardBody>
        //                 </Card>
        //
        //         </Col>
        //     </Row>
        // </Container>
