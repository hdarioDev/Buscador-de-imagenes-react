import React from 'react';
import ReactDOM from 'react-dom'
import '../styles/Modal.scss'

function ModalCreate({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}
export { ModalCreate }