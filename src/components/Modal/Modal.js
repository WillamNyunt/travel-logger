import './Modal.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '../../slices/modal';

const Modal = () => {
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        console.log('modalclose')
        dispatch(setModal(false))
    }

    return (
        <div className='modal'>
            <a className='modal-exit' onClick={modalCloseHandler}>X</a>
            This is a modal
        </div>
    )
}


export default Modal