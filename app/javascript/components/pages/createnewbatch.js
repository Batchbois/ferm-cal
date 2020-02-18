import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
    Row,
    Container
} from 'reactstrap';
import { Redirect } from "react-router-dom"
import { createBatch, getBatches} from '../apiCalls.js';
import Bug from 'images/bugs.jpg'

class CreateNewBatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            form: {
                name: '',
                ferment: 'beer',
                description: '',
                start_date: ''
            }
        }
    }

    createNewBatch = (batch) => {
        createBatch(batch)
        this.setState({success:true})
        .then((response) => {
            if(response.ok){
                return this.getBatchList()
            }
        })
        .catch(error => console.log(error))
    }

    getBatchList = (batches) => {
        getBatches()
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

render() {
    let { name, ferment, start_date, description } = this.state.form
    {this.state.success &&
        <Redirect to="/"/>}

  return (
    <div>
        <Container>
            <Row>
                <Col sm="7" lg="7">
                    <Form>

                        <FormGroup>
                            <Label for="name">Batch Name</Label>
                            <Input onChange={this.handleChange} value={name} type="text" name="name" id="name" placeholder="Grand Ol' Pickles"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="start_date">Batch Birthday</Label>
                            <Input onChange={this.handleChange} value={start_date} type="date" name="start_date" id="start_date"  />
                        </FormGroup>

                        <FormGroup>
                            <Label for="ferment">Fermentation Type</Label>
                            <Input onChange={this.handleChange} value={ferment} type="select" name="ferment" id="ferment">
                              <option>beer</option>
                              <option>pickle</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Description:</Label>
                            <Input onChange={this.handleChange} value={description}  type="textarea" name="description" id="description" placeholder="Notes about ingredients, temperature, quantity, etc."/>
                        </FormGroup>


                        <Button onClick={() => this.createNewBatch(this.state.form)} type="submit">Submit</Button>

                    </Form>

                </Col>
                <Col sm="5" lg="5">
                    <img src={Bug} />
                </Col>
            </Row>
        </Container>
    </div>
  );
}
}
export default CreateNewBatch;
