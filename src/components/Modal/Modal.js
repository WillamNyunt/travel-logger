import './Modal.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '../../slices/modal';

const Modal = (props) => {
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        dispatch(setModal(false))
    }

    const modalOpenHandler = () => {
        dispatch(setModal(true))
    }


    return (
        <div className={`modal ${props.open ? '-open' : '-closed'}`}>
            <span className='modal-exit' onClick={modalCloseHandler}></span>
            <h3 className='modal-title'>Modal title</h3>
            <span className='modal-open-tooltip' data-tooltip='Add new nodes' onClick={modalOpenHandler}></span>
        </div>
    )
}


export default Modal