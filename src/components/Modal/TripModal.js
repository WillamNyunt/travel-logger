import './TripModal.scss';
import { useDispatch } from 'react-redux';
import { setTripModal } from '../../slices/tripModal';
import { RxCross2 } from "react-icons/rx";
export const TripModal = () => {
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        dispatch(setTripModal(false))
    }

    const modalOpenHandler = () => {
        dispatch(setTripModal(true))
    }
    
    return (
        <div className='trip-modal'>
            <RxCross2 className='trip-modal__exit'  onClick={modalCloseHandler} />
            <h3 className='trip-modal__title'>Trips</h3>
            <div className='trip-modal__content'>
                <p>Oops... it looks like there are no trips currently added.</p>
            </div>
            <div className='trip-modal-footer'>
                <button className="btn btn-dm-white">Add trip</button>
            </div>
            <span className='modal-open-tooltip' data-tooltip='Add trip' onClick={modalOpenHandler}></span>
        </div>
    )
}