import React from 'react';
import {
    Container,
    Card,
    CardTitle,
    CardBody
} from 'reactstrap';
import { Link } from "react-router-dom"

const Archive = (props) => {
    let { batches } = props
    return(
        <Container>
            <Card className="card text-info bg-info mb-3" id= "batches">
                <CardBody>
                    <CardTitle className="card-title text-white"><h2>Batches</h2></CardTitle>
                        <ul className="list-group list-group-flush">
                            {batches.map((batch,index)=> {
                                return(
                                    <li key={index} className="list-group-item">
                                        <Link to={`/batches/${batch.id}`} style={{ textDecoration: 'none' }}>
                                            <h4>{batch.name} </h4>
                                        </Link>
                                        <h6>{batch.ferment} Start: {batch.start_date}</h6>
                                    </li>
                                )
                            })}
                        </ul>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Archive;
