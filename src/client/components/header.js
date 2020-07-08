import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class Header extends Component {

  constructor(props){
    super(props)

    this.logout = this.logout.bind(this);
  }

  logout() {
    fetch('/api/logout', { method: 'GET' });
  }

  render() {
    return (
      <header>

        <Navbar bg="dark" variant="dark">
          <Container>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/"} className="nav-link">
                  Users
              </Link>
              </Nav>
              <Nav>
                <Link to={"/friend"} className="nav-link">
                  Friends
                </Link>
              </Nav>
            </Nav>

            <Navbar.Brand>
              <Link to={"/login"} className="nav-link" onClick={this.logout} >
                Log out
              </Link>
            </Navbar.Brand>

          </Container>
        </Navbar>

      </header>
    )
  }
}
