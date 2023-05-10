import React from "react";
import CartWidget from '../CartWidget/CartWidget';
import miLogo from '../../assets/img/logo512.png';
import './NavBar.css';

import { Link } from "react-router-dom";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";


class NavbarDocs extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar navbar-dark bg-dark" expand="lg">
          <img  style={{
            width: "50px",
            height: "50px",
            objectFit: "contain"
        }} src={miLogo} alt="BebidasVip"/>
          <NavbarBrand  tag={Link} to="/">
            Bebidas Vip
          </NavbarBrand>
          <Container>
            <button
              className="navbar-toggler"
              id="navbarNavDropdown"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
              <Nav navbar>
                <NavItem className="active">
                  <NavLink tag={Link} to="/" >
                    Home <span className="sr-only"></span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink tag={Link} to="/category/whisky" >
                    Whisky <span className="sr-only"></span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink tag={Link} to="/category/tequila" >
                    Tequila <span className="sr-only"></span>
                  </NavLink>
                </NavItem>
                <NavItem className="active">
                  <NavLink tag={Link} to="/category/vino" >
                    Vino <span className="sr-only"></span>
                  </NavLink>
                </NavItem>
                
              </Nav>
            </UncontrolledCollapse>
          </Container>

          <CartWidget cantItems={0}/>
        </Navbar>
      </>
    );
  }
}

export default NavbarDocs;