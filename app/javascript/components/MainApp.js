import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import { Container } from 'reactstrap'

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
        this.state = {
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

    completeTask = (t) => {
        let { tasks } = this.state
        tasks[tasks.findIndex(v => v.id === t.id)].complete = true
        this.setState({tasks: tasks})
    }

    completeBatch = (b) => {
        let { batches } = this.state
        batches[batches.findIndex(v => v.id === b.id)].complete = true
        this.setState({batches: batches})
        b.tasks.forEach(task => {
            this.completeTask(task)
        });
    }

    render () {
        const { signed_in } = this.props
        const { batches, tasks } = this.state
        return (
        <div>
          <Router>
            <Header appProps={this.props}/>
            <Container style={{marginTop: '2%'}}>
                <Switch>
                    <Route exact path= "/" render={() => {
                        if (signed_in) {
                            return <Dashboard batches={batches} tasks={tasks} completeTask={this.completeTask} />
                        } else {
                            return <NotSignedInLanding/>
                        }
                    }}/>
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/archive" render={() => <Archive batches={batches.filter(v => v.completed)}/>}/>
                    <Route path="/tasks" render={() => <Tasks 
                                                          tasks={tasks} 
                                                          batches={batches}
                                                          completeTask={this.completeTask}
                                                        />}/>
                    <Route path="/active" render={(props) =><Active {...props} batches={batches.filter(v => v.completed === false)}/>}/>
                    <Route exact path="/batches/:id" render={(props) => <BatchShow {...props} 
                                                                            batches={batches} 
                                                                            completeTask={this.completeTask}
                                                                            completeBatch={this.completeBatch}
                                                                        />}/>
                    <Route path="/newbatch" render={(props) =><CreateNewBatch />}/>


                </Switch>
            </Container>
          </Router>
        </div>
    );
  }
}

export default MainApp


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
