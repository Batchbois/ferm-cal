import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

const CreateNewBatch = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="fermentname">Batch Name</Label>
        <Input type="text" name="batch_name" id="example_batch_name" placeholder="Sourestkraut" />
      </FormGroup>
      <FormGroup>
        <Label for="date_started">Date Started</Label>
        <Input type="text" name="date_started" id="example_date" placeholder="today's date" />
      </FormGroup>
      <FormGroup>
        <Label for="ferment_type">Fermentation Type</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Beer</option>
          <option>Vegetable</option>

        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>


      <FormGroup tag="fieldset">
        <legend>Fermentation Type</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Beer
          </Label>
        </FormGroup>
        <FormGroup check>

          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Vegetable (Sauerkraut, Pickle, Kimchi)
          </Label>
        </FormGroup>
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
}

export default CreateNewBatch;
