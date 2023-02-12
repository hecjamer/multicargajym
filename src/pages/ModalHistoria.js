import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/styles/modales.scss';
import '../pages/styles/modalHistoria.scss';
import { DataContext } from '../DataContext';

function ModalHistoria(props) {
  const { configuracion } = useContext( DataContext );
  return (
    <Modal className="prueba"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalHistoria"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{configuracion.navbar.menus.nosotros.historia.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{configuracion.navbar.menus.nosotros.historia.detalle}</p>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}

export default ModalHistoria;