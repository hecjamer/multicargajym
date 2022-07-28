import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './styles/navbarDropdown.scss'
import { Link } from 'react-router-dom';
import ModalMision from '../pages/ModalMision';
import ModalValores from '../pages/ModalValores';
import ModalObjetivosSeguridad from '../pages/ModalObjetivosSeguridad';



function NavbarDropdown() {

  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);

  return (
    <>
      <Nav variant="pills" className="NavbarDropdown">

      <NavDropdown title="nosotros" id="nav-dropdown">
        <NavDropdown.Item onClick={() => setModalShow1(true)}>Mision</NavDropdown.Item>
        <NavDropdown.Item onClick={() => setModalShow2(true)}>Valores</NavDropdown.Item>
        <NavDropdown.Item onClick={() => setModalShow3(true)}>Objetivos de seguridad</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="SERVICIOS" id="nav-dropdown">
        <NavDropdown.Item>Action</NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item><Nav.Link href="#action1" className="NavbarDropdown-NavLink">decretos</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="#action1" className="NavbarDropdown-NavLink">cobertura</Nav.Link></Nav.Item>

      </Nav>

      <ModalMision show={modalShow1} onHide={() => setModalShow1(false)}/>
      <ModalValores show={modalShow2} onHide={() => setModalShow2(false)}/>
      <ModalObjetivosSeguridad show={modalShow3} onHide={() => setModalShow3(false)}/>

    </>


  );
}

export default NavbarDropdown;



