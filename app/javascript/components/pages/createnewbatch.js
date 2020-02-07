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
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            form: {
                name: '',
                ferment: '',
                description: '',
                start_date: ''
                // start_date: this.state.date

            }
        }
    }
    onChange = date => {
        this.setState({ date })
    }

    handleSumbit = () => {
        this.props.onSubmit(this.state.form)
        .then(()=> {
            this.setState({success:true})
        })
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

render() {
    let { name, ferment, completed, description } = this.state.form
    console.log(this.state.form)
  return (
    <div>
        <Container>
            <Row>
                <Col sm="7" lg="7">
                    <Form>
                        <FormGroup>
                            <Label for="name">Batch Name</Label>
                            <Input type="text" name="name" id="example_batch_name" placeholder="Grand Ol' Pickles"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="start_date">Birthday</Label>
                            <Input type="text" name="start_date" id="example_date" placeholder="Today's date" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="ferment">Fermentation Type</Label>
                            <Input type="select" name="ferment" id="select">
                              <option>Beer</option>
                              <option>Vegetable (Sauerkraut, Pickle, Kimchi)</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description:</Label>
                            <Input type="textarea" name="description" id="description" placeholder="Notes about ingredients, temperature, quantity, etc."/>
                        </FormGroup>
                        <Button onClick= {this.handleSubmit} type="submit">Submit</Button>
                    </Form>
                    {this.state.success && <Redirect to="/batches" />}
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

// <FormGroup>
//     <Label for="notes">Notes:</Label>
//     <Input type="textarea" name="text" id="exampleText" placeholder="Notes about ingredients, temperature, quantity, etc."/>
// </FormGroup>

// <FormGroup>
//     <Label for="start_date">Birthday</Label>
//     <Input type="text" name="start_date" id="example_date" placeholder="Today's date" />
// </FormGroup>
