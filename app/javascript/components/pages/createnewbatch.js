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
import Calendar from "react-calendar";

class CreateNewBatch extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }


    }
    onChange = date => {
        this.setState({ date })
    }

render() {
  return (
    <div>
        <Container>
            <Row>
                <Col sm="7" lg="7">
                    <Form>
                        <FormGroup>
                            <Label for="fermentname">Batch Name</Label>
                            <Input type="text" name="batch_name" id="example_batch_name" placeholder="Grand Ol' Pickles" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="date_started">Birthday</Label>
                            <Input type="text" name="date_started" id="example_date" placeholder="Today's date" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ferment_type">Fermentation Type</Label>
                            <Input type="select" name="select" id="exampleSelect">
                              <option>Beer</option>
                              <option>Vegetable (Sauerkraut, Pickle, Kimchi)</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="notes">Notes:</Label>
                            <Input type="textarea" name="text" id="exampleText" placeholder="Notes about ingredients, temperature, quantity, etc."/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
                <Col sm="5" lg="5">
                    <Row>
                        <h4>Select the Batch's Birthday!</h4>
                    </Row>
                    <Row>
                    <Calendar onChange= {this.onChange} value={this.state.date}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
}
export default CreateNewBatch;
