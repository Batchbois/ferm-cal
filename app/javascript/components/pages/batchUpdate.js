import React from 'react';
import Form from './createnewbatch'


const UpdateBatch = () => {

    handleSubmit = () => {

        this.props.onSubmit(this.state.form)
        // .then(()=> {
        //     this.setState({success:true})
        // })
    }



    return(
        <div>
            <Form onSubmit={this.handleSubmit}
                name={state.batch.name}
                ferment={state.batch.ferment}
                description={state.batch.description}
                start_date={state.batch.start_date}>
            </Form>
        </div>

    )
}

export default UpdateBatch;
