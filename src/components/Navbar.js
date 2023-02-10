import React, {useContext} from 'react';
import NavbarDropdown from './NavbarDropdown';
import './styles/navbar.scss';
import { DataContext } from '../DataContext';


import * as ReactBootStrap from "react-bootstrap"; // extension de ReactBootStrap

function Navbar() {
  const { configuracion } = useContext( DataContext );

  return (
        <div className="sticky-top">

          <ReactBootStrap.Navbar collapseOnSelect expand="lg">
              <ReactBootStrap.Container fluid>
                {/* <ReactBootStrap.Navbar.Brand href="/multicargajym" className="navlogo"><img alt="Logo" src={require(`../images/${configuracion.navbar.logo}`)} width="40" height="40" className="d-inline-block align-top filter-green"/>{' '} {configuracion.navbar.nombre} </ReactBootStrap.Navbar.Brand> */}
                <ReactBootStrap.Navbar.Brand href="/multicargajym" className="navlogo">
                  { configuracion.navbar.logo ?
                    <img
                      alt="Logo"
                      src={(`${configuracion.img.linkImg}${configuracion.navbar.logo}`)}
                      width="40"
                      height="40"
                      className="d-inline-block align-top logologo"
                      style={{filter:`${configuracion.navbar.filterSvg1}`}}
                    />
                    :
                    <i
                      style={{fontSize: `${configuracion.navbar.tamanoFontSizeLogo}`, color: `${configuracion.navbar.colorFontSizelogo}`}}
                      class="icon-ormiga d-inline-block align-top logologo">
                    </i>
                  }

                  {' '} {configuracion.navbar.nombre}
                </ReactBootStrap.Navbar.Brand>

                <NavbarDropdown/>

                <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />

                <ReactBootStrap.Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                  <ReactBootStrap.Offcanvas.Header closeButton>
                    <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel">
                    </ReactBootStrap.Offcanvas.Title>
                  </ReactBootStrap.Offcanvas.Header>

                  <ReactBootStrap.Offcanvas.Body className="Offcanvas-Body">

                    <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">
                       <NavbarDropdown/>
                    </ReactBootStrap.Nav>

                  </ReactBootStrap.Offcanvas.Body>

                </ReactBootStrap.Navbar.Offcanvas>

              </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>

        </div>
  );
}

export default Navbar





