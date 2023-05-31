import React from 'react';
import './App.css';

function Modal(props: any) {
  return (
    <div className={`modal-container ${props.isOpen ? 'open' : ''}`}>
        <button onClick={props.onClose}>Close</button>
        <img src={props.currentProduct?.image} />
    </div>
  );
}

export default Modal;
