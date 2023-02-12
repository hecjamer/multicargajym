import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/styles/modales.scss';
import '../pages/styles/modalVision.scss';
import { DataContext } from '../DataContext';

function ModalVision(props) {
  const { configuracion } = useContext( DataContext );
  return (
    <Modal className="prueba"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalVision"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{configuracion.navbar.menus.nosotros.vision.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{configuracion.navbar.menus.nosotros.vision.detalle}</p>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}

export default ModalVision;