import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../pages/styles/modalMision.scss';
import menu from '../data/configuracion.json';

function ModalMision(props) {
  return (
    <Modal className="prueba"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{menu.navbar.menus.nosotros.mision.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{menu.navbar.menus.nosotros.mision.detalle}</p>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}

export default ModalMision;