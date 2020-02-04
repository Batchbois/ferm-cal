import React from "react";

import {
    Nav,
    Navbar
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import AboutUs from './aboutus';

const Header = (props) => {
    console.log(props);
    const { current_user, signed_in, sign_in_route, sign_out_route } = props.appProps
    return(
        <Navbar bg="light" expand="sm">
            <Navbar.Brand><Link className="navbar-brand" to= "/">FermCal</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="./aboutus">About Us!</Link>

                  { signed_in && <Link className="nav-link" to="/tasks">Tasks</Link> }
                  { signed_in && <Link className="nav-link" to="/active">Active</Link> }
                  { signed_in && <Link className="nav-link" to="/archive">Archive</Link> }
                  { signed_in && <Link className="nav-link" to="/newbatch">Create New Batch!</Link> }

                  { signed_in &&
                       <Nav.Link href={sign_out_route}>Sign Out</Nav.Link>
                   }
                   {!signed_in &&
                       <Nav.Link href={sign_in_route}>Sign In</Nav.Link>
                   }
                   {!signed_in &&
                       <Nav.Link href="users/sign_up">Sign Up</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
