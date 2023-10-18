import React from 'react'
import './BackDropModal.scss';
import { createPortal } from 'react-dom';

export default function BackDropModal(props) {
  return (
    <>
        {createPortal(
        <div className='backdrop-modal__wrapper'>
         <div className={`backdrop-modal ${props.className}`}>
            {props.children}
         </div>
        </div>, document.getElementById('backdrop-modal-target')
        )}
     </>
    
  )
}
