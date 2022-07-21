import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './styles/navbarDropdown.scss'
import NavDropdownMenu from '../data/configuracion.json'
import Modal from './Modal'


function NavbarDropdown() {

  const [estadoModal1, cambiarestadoModal1] = useState(true);

  return (

    <Nav variant="pills" className="NavbarDropdown">

          {NavDropdownMenu.navbar.menus.map(navdropMenu => {
            return (
              <NavDropdown title={navdropMenu.nombre} id="nav-dropdown" key={navdropMenu.id}>
                {navdropMenu.registro.map(item => {
                  return (
                    <div key={item.id}>
                        <NavDropdown.Item href="" key={item.id}>{item.nombre}</NavDropdown.Item>
                    </div>

                  )
                })}
              </NavDropdown>
            )
          })}

    </Nav>

  )

  function modal() {

    return (

      <Modal estado={estadoModal1} cambiarEstado={cambiarestadoModal1}>
        <h1>prueba modal</h1>
        <h2>prueba childrem</h2>
      </Modal>

    )
  }





}

export default NavbarDropdown;



