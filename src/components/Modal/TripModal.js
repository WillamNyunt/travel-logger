import './TripModal.scss';
import { useDispatch } from 'react-redux';
import { setTripModal } from '../../slices/tripModal';
import { RxCross2 } from "react-icons/rx";
import { useGetTripsQuery } from 'src/slices/trip';
import { Skeleton } from '@mui/material';

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
            ) }

            { error && (
                <div>
                    {error}
                </div>
            )}
            {  data ? 
                <table className='w-full'>
                    <th>
                        <td>Name</td>
                    </th>
                    <tbody className='w-full'>
                        {data.map((trip) => (
                            <tr className='w-full'>
                                <td className='w-full hover:bg-gray-400 cursor-pointer'>{trip.name}</td>
                            </tr>
                        ))}
                    </tbody>
     
                </table>
             : 
                <>
                   <p>Oops... it looks like there are no trips currently added.</p>
                </>
            }
            </div>
            <div className='trip-modal-footer'>
                <button className="btn btn-dm-white" onClick={addTripOnClickListener}>Add trip</button>
            </div>
        </div>
    )
}