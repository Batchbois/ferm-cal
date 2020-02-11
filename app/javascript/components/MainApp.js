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
import Archive from "./pages/archive";
import Active from "./pages/active";
import Tasks from "./pages/tasks";
import Dashboard from "./pages/dashboard";
import BatchShow from "./pages/batchshow";
import CreateNewBatch from "./pages/createnewbatch";
import UpdateBatch from './pages/batchUpdate';
// import Calendar from "react-calendar";
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
        fetch('/batches',
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
         fetch('http://localhost:3000/batches/' , {
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

    updateBatch = (batch)=> {
        fetch('/batches/' + batch.id, {
            method: "PUT",
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(batch),
            })
            .then(resp =>  console.log(resp))
            // .then((response) => {
            //     if(response.ok){
            //         return this.getBatches()
            //     }
            // })
        }

    deleteBatch = (batch) => {
        console.log(batch);
        fetch('/batches/' + batch.id, {
            body: JSON.stringify(batch),
            headers: {
                'Content-Type': 'batch/json'
            },
            method: "DELETE"
        })
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
        const { batches, tasks } = this.state
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
                    <Route path="/archive" render={(props) =><Archive {...props} batches={batches}/>}/>
                    <Route path="/tasks" render={(props) =><Tasks {...props} tasks={tasks}/>}/>
                    <Route path="/active" render={(props) =><Active {...props} batches={batches}/>}/>
                    <Route exact path="/batches/:id" render={(props) =><BatchShow {...props} batches={batches} deleteBatch={this.deleteBatch} updateBatch={this.updateBatch} />}/>



                    <Route path="/newbatch" render={(props) =><CreateNewBatch onSubmit={this.createBatch}/>}/>


                </Switch>
          </Router>
    );
  }
}

export default MainApp

 //
 // this is update method from code review videos and has mode: cors unlike our version
 //         updateBatch(id, batch) {
 //           return fetch('batches/' + id, {
 //              method: 'PATCH',
 //              mode: 'CORS',
 //              body: JSON.stringify(batch),
 //              headers: {
 //                'Content-Type': 'application/json'
 //              }
 //               }).then(res => {
 //                   return res;
 //               }).catch(err => err);
 //           }

// <Route exact path="/batches" render={(props) =><Batches batches={this.state.batches} />} />
