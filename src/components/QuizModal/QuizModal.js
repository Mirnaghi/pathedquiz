import React from 'react';
import Modal from 'react-modal';
import './QuizModal.css'
Modal.setAppElement('#root')

function QuizModal(props) {
    return (
        <Modal 
            isOpen={props.isOpen}
            onRequestClose={props.handleClose}
            className="Modal"
            overlayClassName="Overlay"
        >
           {props.children}
        </Modal>
    );
}

export default QuizModal;