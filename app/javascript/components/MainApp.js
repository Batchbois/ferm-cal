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
// import 'bootstrap/dist/js/bootstrap.min.js';
// when this is included,page doesnt render


class MainApp extends React.Component {


  render () {
    const { signed_in } = this.props
    return (
      <Router>
        <Header appProps={this.props}/>
        {!signed_in &&
        <NotSignedInLanding />}


        <Switch>
        <Route exact path= "/" component={NotSignedInLanding}/>
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default MainApp
