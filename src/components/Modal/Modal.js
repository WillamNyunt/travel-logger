import './Modal.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '../../slices/modal';

const Modal = (props) => {
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        dispatch(setModal(false))
    }

    return (
        <div className={`modal ${props.open && '-open'}`}>
            <span className='modal-exit' onClick={modalCloseHandler}>X</span>
            <h3 className='modal-title'>Modal title</h3>
        </div>
    )
}


export default Modal