import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Header from './Header';
import NotSignedInLanding from './pages/landingPage';
import AboutUs from "./pages/aboutus";
import Dashboard from "./pages/dashboard";
import BatchShow from "./pages/batchshow";
import CreateNewBatch from "./pages/createnewbatch";
import Calendar from "react-calendar";
// import 'bootstrap/dist/js/bootstrap.min.js';
// when this is included,page doesnt render


class MainApp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            batches: [],
            tasks: []
        }
    }

    getBatches = () => {
        return fetch('/batches',
            {method: "GET"}
        ).then((response)=> {
            if(response.ok){
                return(response.json())
            }
        })
        .then((batches)=> {
            this.setState({batches: batches})
        })
    }

    createBatch = (batch)=> {
          return fetch('http://localhost:3000/batches/' , {
              body: JSON.stringify(batch),
              headers: {
                  'Content-Type': 'application/json'
              },
              method: "POST"
          })
          .then((response) => {
              if(response.ok){
                  return this.getBatches()
              }
          })
      }

    deleteBatch = (batch) => {
        console.log(batch);
        return fetch('/batches/' + batch.id, {
            body: JSON.stringify(batch),
            headers: {
                'Content-Type': 'batch/json'
            },
            method: "DELETE"
        })
        //currently having the delete response just be the same page so that we can read the error msg
        .then((response) => {
            window.location.href = "/";
        })
    //     .catch(error => {
    //         console.log(error)
    //         this.setState({errors: error})
    //     })
    }




    getTasks = () => {
        return fetch('http://localhost:3000/tasks',
            {method: "GET"}
        ).then((response)=> {
            if(response.ok){
                return(response.json())
            }
        })
        .then((tasks)=> {
            this.setState({tasks: tasks})
        })
    }

    componentDidMount = () => {
        this.getBatches()
        this.getTasks()
    }

    render () {
        const { signed_in } = this.props
        const { batches } = this.state
        return (
          <Router>
            <Header appProps={this.props}/>
                <Switch>
                    <Route exact path= "/" render={() => {
                        if (signed_in) {
                            return <Dashboard batches={this.state.batches} tasks={this.state.tasks} />
                        } else {
                            return <NotSignedInLanding/>
                        }
                    }}/>
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/dashboard" component={Dashboard}/>


                    <Route exact path="/batches/:id" render={(props) =><BatchShow {...props} batches={batches} deleteBatch={this.deleteBatch}/>}/>



                    <Route path="/newbatch" render={(props) =><CreateNewBatch onSubmit={this.createBatch}/>}/>


                </Switch>
          </Router>
    );
  }
}

export default MainApp

// <Route exact path="/batches" render={(props) =><Batches batches={this.state.batches} />} />
