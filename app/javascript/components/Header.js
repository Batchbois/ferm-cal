import React from "react";
import { Link } from 'react-router-dom';
import AboutUs from './pages/aboutus';


import {
    Nav,
    Button,
    Navbar
} from 'react-bootstrap';


const Header = (props) => {
    const { current_user, signed_in, sign_in_route, sign_out_route } = props.appProps
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <Link className="navbar-brand" to="/">FermCal</Link>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="./aboutus">About Us</Link>
              </li>
              <li className="nav-item">
              { signed_in && <Link className="nav-link" to="/tasks">Tasks</Link> }
              </li>
              <li className="nav-item">
              { signed_in && <Link className="nav-link" to="/active">Active</Link> }
              </li>
              <li className="nav-item">
              { signed_in && <Link className="nav-link" to="/archive">Archive</Link> }
              </li>
              <li className="nav-item">
              { signed_in && <Link className="nav-link" to="/newbatch">Create New Batch!</Link> }
              </li>
              <li className="nav-item">
              { signed_in && <Nav.Link href={sign_out_route}>Sign Out</Nav.Link>}
              </li>
              <li className="nav-item">
              { !signed_in && <Nav.Link href={sign_in_route}>Sign In</Nav.Link>}
              </li>
              <li className="nav-item">
              { !signed_in && <Nav.Link href="users/sign_up">Sign Up</Nav.Link>}
              </li>
            </ul>

          </div>
        </nav>






    )
}

export default Header;


// <div className="nav">
// <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
// <Link className="navbar-brand" href="/">FermCal</Link>
//
//
// <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//
//
//
// <ul className="navbar-nav mr-auto">
// <li className="nav-item">
// <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
// </li>
// <li className="nav-item">
// <Link className="nav-link" href="#">About Us!</Link>
// </li>
// <li className="nav-item">
// { signed_in && <Link className="nav-link" to="/tasks">Tasks</Link> }
// </li>
// <li className="nav-item">
// { signed_in && <Link className="nav-link" to="/active">Active</Link> }
// </li>
// <li className="nav-item">
// { signed_in && <Link className="nav-link" to="/archive">Archive</Link> }
// </li>
// <li className="nav-item">
// { signed_in && <Link className="nav-link" to="/newbatch">Create New Batch!</Link> }
// </li>
// <li className="nav-item">
// { signed_in && <Nav.Link href={sign_out_route}>Sign Out</Nav.Link>}
// </li>
// <li className="nav-item">
// { !signed_in && <Nav.Link href={sign_in_route}>Sign In</Nav.Link>}
// </li>
// <li className="nav-item">
// { !signed_in && <Nav.Link href="users/sign_up">Sign Up</Nav.Link>}
// </li>
// </ul>
// </div>
//
// </Navbar.Toggle>
// </Navbar>
// </div>
