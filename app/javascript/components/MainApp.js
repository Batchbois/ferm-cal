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
import { getBatches, getTasks } from './apiCalls.js';


class MainApp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            batches: [],
            tasks: []
        }
    }

    componentDidMount = () => {
        getBatches()
            .then((response)=> {
                if(response.ok){
                    return(response.json())
                }
            })
            .then((batches)=> {
                this.setState({batches: batches})
            })
        getTasks()
            .then((response)=> {
                if(response.ok){
                    return(response.json())
                }
            })
            .then((tasks)=> {
                this.setState({tasks: tasks})
            })
    }

    render () {
        const { signed_in } = this.props
        const { batches, tasks } = this.state
        return (
        <div>
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
                    <Route path="/archive" render={(props) =><Archive {...props} batches={batches.filter(v => v.completed === true)}/>}/>
                    <Route path="/tasks" render={(props) =><Tasks {...props} tasks={tasks}/>}/>
                    <Route path="/active" render={(props) =><Active {...props} batches={batches.filter(v => v.completed === false)}/>}/>
                    <Route exact path="/batches/:id" render={(props) =><BatchShow {...props} batches={batches}  />}/>



                    <Route path="/newbatch" render={(props) =><CreateNewBatch onSubmit={this.createBatch}/>}/>


                </Switch>
          </Router>
          </div>
    );
  }
}

export default MainApp
//CREATE BATCH onSubmit={this.createBatch}
 //BATCH SHOW deleteBatch={this.deleteBatch} updateBatch={this.updateBatch}



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
