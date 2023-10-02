import './TripModal.scss';
import { useDispatch } from 'react-redux';
import { setModal } from '../../slices/tripModal';
import { CiMap} from "reac-icons/ci";

export const TripModal = () => {
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        dispatch(setModal(false))
    }

    const modalOpenHandler = () => {
        dispatch(setModal(true))
    }
    
    return (
        <div className={`trip-modal ${props.open ? '-open' : '-closed'}`}>
            <span className='trip-modal-exit' onClick={modalCloseHandler}></span>
            <h3 className='trip-modal-title'>Modal title</h3>
            <span className='modal-open-tooltip' data-tooltip='Add trip' onClick={modalOpenHandler}></span>
        </div>
    )
}