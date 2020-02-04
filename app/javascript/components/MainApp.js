import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Header from './Header';
import NotSignedInLanding from './landingPage';
import AboutUs from "./aboutus";

class MainApp extends React.Component {


  render () {
      console.log(this.props)
      const { signed_in } = this.props
    return (
      <Router>
        <Header appProps={this.props}/>
        {!signed_in &&
        <NotSignedInLanding />}
        <h1>INDEED</h1>

        <Switch>
            <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </Router>
    );
  }
}

export default MainApp
