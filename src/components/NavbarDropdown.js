import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './styles/navbarDropdown.scss'



function NavbarDropdown() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect} className="NavbarDropdown">
      <Nav.Item>
        <Nav.Link eventKey="1" href="/">
        INICIO
        </Nav.Link>
      </Nav.Item>


      <NavDropdown title="NOSOTROS" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="SERVICIOS" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>

    </Nav>
  );
}

export default NavbarDropdown;