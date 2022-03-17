
import {
  Link,
} from "react-router-dom";
import "./navigationBar.css"

import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function NavigationBar() {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" >
        <Container fluid>
        <li className="fw-bold "><Link to="/">Jenkins</Link></li>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
        
              <li><Link to="blog">Blog</Link></li>
              <li><a href="#news">News</a></li>
              <li><a href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              <li><a href="#home">About</a></li>
              <li><a href="#news">English</a></li>

           
             
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Download</Button>
              </Form>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar;