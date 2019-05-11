import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Tuuute</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/tutorials">Tutorials</Nav.Link>
            <Nav.Link href="/tutors">Tutors</Nav.Link>
            </Nav>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search keyword" className="mr-sm-2" />
            <Button className="btn-md btn-light">Find</Button>
            </Form> */}
        </Navbar>
      </div>
    )
  }
}

export default Navigation
