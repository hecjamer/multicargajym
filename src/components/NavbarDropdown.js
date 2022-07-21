import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './styles/navbarDropdown.scss'
import NavDropdownMenu from '../data/configuracion.json'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';



function NavbarDropdown() {

  const [modalShow, setModalShow] = React.useState(false);

  return (

    <Nav variant="pills" className="NavbarDropdown">

          {NavDropdownMenu.navbar.menus.map(navdropMenu => {
            return (
              <NavDropdown title={navdropMenu.nombre} id="nav-dropdown" key={navdropMenu.id}>
                {navdropMenu.registro.map(item => {
                  return (
                    <div key={item.id}>
                        <NavDropdown.Item href="" key={item.id} onClick={() => setModalShow(true)}>{item.nombre}</NavDropdown.Item>

                          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>


                    </div>

                  )
                })}
              </NavDropdown>
            )
          })}

    </Nav>

  )

}

export default NavbarDropdown;



