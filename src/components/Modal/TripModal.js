import './TripModal.scss';
import { useDispatch } from 'react-redux';
import { setTripModal } from '../../slices/tripModal';
import { RxCross2 } from "react-icons/rx";
import TripTable from './TripTable';
import { useState } from 'react';
import AddTripForm from './AddTripForm';

export const TripModal = () => {
    const [ addTripFormOpen, setAddTripFormOpen ] = useState(false);
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        console.log('trip modal closed')
        dispatch(setTripModal(false))
    }

    const addTripOnClickListener = () => {
        setAddTripFormOpen(true);
    }

    const backTripModalListener = () => {
        setAddTripFormOpen(false);
    }

    return (
        <div className='trip-modal'>
            <RxCross2 className='trip-modal__exit'  onClick={modalCloseHandler} />
            <h3 className='trip-modal__title'>Trips</h3>
            <div className='trip-modal__content'>
            { addTripFormOpen ? <AddTripForm/> : <TripTable/>}
            </div>
            { !addTripFormOpen ? 
                    <div className='trip-modal-footer'>
                        <button className="btn btn-dm-white" onClick={addTripOnClickListener}>Add trip</button>
                    </div> : 
                    <div className='trip-modal-footer'>
                     <button className="btn btn-dm-white rounded-lg" onClick={backTripModalListener}>Back</button>
                    </div>
            }
        </div>
    )
}