import React from 'react';

function Modal({children, estado, cambiarEstado}) {
  return (

    <div>
      {estado &&
        {children}
      }
    </div>


  )
}

export default Modal;
