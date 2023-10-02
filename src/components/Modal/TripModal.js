import './TripModal.scss';
import { useDispatch } from 'react-redux';
import { setTripModal } from '../../slices/tripModal';

export const TripModal = () => {
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        dispatch(setTripModal(false))
    }

    const modalOpenHandler = () => {
        dispatch(setTripModal(true))
    }
    
    return (
        <div className={`trip-modal`}>
            <span className='trip-modal-exit' onClick={modalCloseHandler}></span>
            <h3 className='trip-modal-title'>Modal title</h3>
            <span className='modal-open-tooltip' data-tooltip='Add trip' onClick={modalOpenHandler}></span>
        </div>
    )
}