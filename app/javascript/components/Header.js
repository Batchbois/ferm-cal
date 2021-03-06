import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AboutUs from './pages/aboutus';
import Pickle from 'images/pickle1.svg'

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

              <NavbarBrand href="/">ferm-cal <img src={Pickle}/></NavbarBrand>

              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to= "/tasks">Tasks</Link>}
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to="/active">Active</Link>}
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to="/archive">Archive</Link>}
                  </NavItem>
                  <NavItem>
                    {signed_in && <Link className="nav-link" to="/newbatch">New Batch!</Link>}
                  </NavItem>
                  <NavItem>
                  <Link className="nav-link" to="/aboutus/">About us!</Link>
                  </NavItem>
                  <NavItem>
                    {signed_in && <NavLink className="nav-link" href={sign_out_route}>Sign Out</NavLink>}
                  </NavItem>
                  <NavItem>
                    {!signed_in && <NavLink className="nav-link" href={sign_in_route}>Sign In</NavLink>}
                  </NavItem>
                  <NavItem>
                    {!signed_in && <NavLink className="nav-link" href="users/sign_up">Sign Up</NavLink>}
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>

    )
}

export default Header;
