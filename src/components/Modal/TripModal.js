import './TripModal.scss';
import { useDispatch } from 'react-redux';
import { setTripModal } from '../../slices/tripModal';
import { RxCross2 } from "react-icons/rx";
import { useGetTripsQuery } from 'src/slices/trip';
import { Skeleton } from '@mui/material';
import TripTable from './TripTable';
import { useState } from 'react';

export const TripModal = () => {
    const dispatch = useDispatch();

    const modalCloseHandler = () => {
        dispatch(setTripModal(false))
    }

    const modalOpenHandler = () => {
        dispatch(setTripModal(true))
    }
    // const trips = useSelector(getAllTrips);

    const { data, error, isLoading} = useGetTripsQuery('iSojVlIFhQh631bOJmvM6HLZV1I2');

    const addTripOnClickListener = () => {
        console.log('clicked')
    }

    const { addTripFormOpen, setAddTripFormOpen } = useState(false);

    return (
        <div className='trip-modal'>
            <RxCross2 className='trip-modal__exit'  onClick={modalCloseHandler} />
            <h3 className='trip-modal__title'>Trips</h3>
            <div className='trip-modal__content'>
            { isLoading &&  (
            <div className='flex flex-col gap-y-4'>
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={100} height={48} />
                <Skeleton sx={{ bgcolor: 'grey.700', fontSize: '18px', width: '80%'}} className="mt-5" variant='text' height={48} />
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={100} height={38} />
            </div> 
            )}
            { error && (
                <div>
                    {error}
                </div>
            )}
            {  data &&
                <TripTable data={data} />
            }
            </div>
            <div className='trip-modal-footer'>
                <button className="btn btn-dm-white" onClick={addTripOnClickListener}>Add trip</button>
            </div>
        </div>
    )
}