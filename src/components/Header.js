import React  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <Nav className="justify-content-center" justify variant="tabs"  defaultActiveKey="/">
      <Nav.Item>     
        <Nav.Link as={Link} to="/">
          Las Urbanas
        </Nav.Link>           
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/reservacion">
          Reservaciones
        </Nav.Link>                
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/direccion">
          Ubicación
        </Nav.Link>          
      </Nav.Item>
      <Nav.Item>  
        <Nav.Link as={Link} to="/contactanos">
          Contactanos
        </Nav.Link>               
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.menudigital.com/restaurante/urban-kitchen-bar" target={'_blank'}>Menú</Nav.Link>
      </Nav.Item>
      
    </Nav>
  )
}

export {Header}