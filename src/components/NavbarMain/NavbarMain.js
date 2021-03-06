import React from 'react'
import {Navbar, Nav, Col, Row, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './NavbarMain.css'



function NavbarMain () {


    return (

    <Row>

      <Col>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar d-flex align-items-center justify-content-center">
      <Container>

          <Navbar.Brand className="console-color text-monospace"> <Link to="/"><span className="d-none d-md-inline">&copy;2020 -</span> Francisco Sepulveda</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-monospace">

            <Nav.Link> <Link to="/">/Inicio </Link></Nav.Link>
            <Nav.Link ><Link to="/proyectos">/Proyectos </Link> </Nav.Link>
            <Nav.Link ><Link to="/about">/Sobre mi </Link> </Nav.Link>
            <Nav.Link ><Link to="/contacto"> /Contacto </Link> </Nav.Link>
    
        </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
</Col>

</Row>





    
    )
}

export default NavbarMain