import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Header from './Header';


class MainApp extends React.Component {
  render () {
    return (
      <Router>
        <Header appProps={this.props}/>

        <h1>INDEED</h1>
      </Router>
    );
  }
}

export default MainApp
