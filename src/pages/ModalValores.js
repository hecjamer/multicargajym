import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../pages/styles/modales.scss";
import "../pages/styles/modalValores.scss";
import {DataContext} from "../DataContext";

function ModalValores(props) {
  const {configuracion} = useContext(DataContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalValores"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {configuracion.navbar.menus.nosotros.valores.nombre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container">
          <div class="grid-x">
            <div class="cell small-6">
              <ul class="modal-valores-list-ul">
                <li>
                  <i class="fi-torso-business"></i>
                  <p>{configuracion.navbar.menus.nosotros.valores.valor1}</p>
                </li>
                <li>
                  <i class="fi-torso-female"></i>
                  <p>{configuracion.navbar.menus.nosotros.valores.valor2}</p>
                </li>
                <li>
                  <i class="fi-torsos-male-female"></i>
                  <p>{configuracion.navbar.menus.nosotros.valores.valor3}</p>
                </li>
              </ul>
            </div>

            <div class="cell small-6">
              <ul class="modal-valores-list-ul">
                <li>
                  <i class="fi-results-demographics"></i>
                  <p>{configuracion.navbar.menus.nosotros.valores.valor4}</p>
                </li>
                <li>
                  <i class="fi-torsos-all"></i>
                  <p>{configuracion.navbar.menus.nosotros.valores.valor5}</p>
                </li>
                <li>
                  <i class="fi-torsos-female-male"></i>
                  <p>{configuracion.navbar.menus.nosotros.valores.valor6}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalValores;
