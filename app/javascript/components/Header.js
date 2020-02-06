import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AboutUs from './pages/aboutus';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Header = (props) => {
    const { current_user, signed_in, sign_in_route, sign_out_route } = props.appProps

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar className="navbar navbar-expand-sm navbar-dark bg-success">
              <NavbarBrand href="/">Ferm-Cal</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/aboutus/">About us!</Link>
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to= "/tasks">Tasks</Link>}
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to="/active">Active</Link>}
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to="/achive">Archive</Link>}
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to="/newbatch">New Batch!</Link>}
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to={sign_out_route}>Sign Out</Link>}
                  </NavItem>
                  <NavItem>
                    {!signed_in && <Link className="nav-link" to={sign_in_route}>Sign In</Link>}
                  </NavItem>
                  <NavItem>
                    {!signed_in && <Link className="nav-link" to="users/sign_up">Sign Up</Link>}
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>

    )
}

export default Header;
