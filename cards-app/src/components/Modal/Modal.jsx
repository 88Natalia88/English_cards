import React from 'react';
import './Modal.scss';

function Modal({ isOpen, message, onClose }){
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Сохранение!</h2>
                <p>{message}</p>
                <button className='btnModal' onClick={onClose}>&#10008;</button>
            </div>
        </div>
    );
}
export default Modal;