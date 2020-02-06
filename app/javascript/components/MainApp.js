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
            batches: [
                {id: 1,
                name: "Sauerkraut",
                start_date: "04/02/01",
                notes: "full of salt, placed in crock",
                tasks: [
                    {due: "04/04/20", description: "walk the kraut", title: 'TASK'},
                    {due: "04/04/20", description: "walk the kraut", title: 'TASK1'},
                    {due: "04/04/20", description: "walk the kraut", title: 'TASK2'}
                ]},
                {id: 2,
                name: "stout",
                start_date: "04/02/01",
                notes: "nice"},
                {id: 3,
                name: "food",
                start_date: "04/02/01",
                notes: "fun and yum"}
            ]
        }
    }
    render () {
        const { signed_in } = this.props

        return (
          <Router>
            <Header appProps={this.props}/>
                <Switch>
                    <Route exact path= "/" component={signed_in ? Dashboard : NotSignedInLanding}/>
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route exact path="/batches" render={(props) =><Batches batches={this.state.batches} />} />

                    <Route exact path="/batches/:id" render={(props) => <BatchShow {...props} batches={this.state.batches}/>}/>



                    <Route path="/newbatch" component={CreateNewBatch}/>
                </Switch>
          </Router>
    );
  }
}

export default MainApp
