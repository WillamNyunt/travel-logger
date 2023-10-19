import React from 'react'
import { useGetTripsQuery, useRemoveTripMutation, useEditTripMutation } from 'src/slices/trip';
import { Skeleton } from '@mui/material';
import './TripTable.scss';
import BackDropModal from './BackDropModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrip } from 'src/slices/trip';

const TripTable =  () => {
    const user = useSelector(state => state.user.user);
    const { data, error, isLoading} = useGetTripsQuery(user.uid);
    const [deleteTrip, deleteTripResult] = useRemoveTripMutation()
    const [backDropModal, setBackDropModal] = useState(false);
    const [editName, setEditName] = useState('')
    const [editingTripId, setEditingTripId] = useState('')
    const [editTrip, editTripResult] = useEditTripMutation()
    const dispatch = useDispatch()

    const selectedTrip = useSelector(state => state.trip.trip)
    
    const tripEditHandler = (prop) => {
        setBackDropModal(true)
        setEditName(prop.name)
        setEditingTripId(prop.id)
    }

    

    const editTripFormOnSubmitHandler = async (e) => {
        e.preventDefault() 
        try {
            editTrip({id: editingTripId, name: editName}).then(() => {
                setBackDropModal(false)
            })
        } catch ( err ) {
            console.log(err)
        }
    }

  return (
    <>
    { isLoading &&  (
        <div className='flex flex-col gap-y-4'>
            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={100} height={48} />
            <Skeleton sx={{ bgcolor: 'grey.700', fontSize: '18px', width: '80%'}} className="mt-5" variant='text' height={48} />
            <Skeleton sx={{ bgcolor: 'grey.700', fontSize: '18px', width: '80%'}} variant='text' height={48} />
            <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={100} height={38} />
        </div> 
        )}
        { error && (
            <div>
                {error}
            </div>
        )}
        {  data &&
            <table className='trip-table w-full table-auto'>
            <thead>
                <tr>
                    <th className='flex text-lg'>Name</th>
                </tr>
            </thead>
            <tbody className='w-full'>
                {data ? 
                    data.map((trip) => (
                    <tr className='w-full trip-table' key={trip.id}>
                        <td className={`w-full text-sm hover:bg-gray-800 cursor-pointer trip-table__row-data ${selectedTrip === trip.name && 'bg-blue-600'}`} onClick={() => dispatch(setTrip(trip.name))}>{trip.name}</td>
                        <td className={`w-full hover:bg-gray-800 cursor-pointer trip-table__row-utility ${selectedTrip === trip.name && 'bg-blue-600'}`}>
                            <span className='trip-table__mini-modal'>
                                <button className='btn' onClick={() => tripEditHandler({id : trip.id, name: trip.name})}>Edit</button>
                                <button className='btn' onClick={() => deleteTrip(trip.id)}>Delete</button>
                            </span>...</td>
                    </tr>
                )) : 
                    <div>No Trips</div>
                }
            </tbody>
        </table>
        }
        {
            backDropModal &&   
            <BackDropModal>
                <h3>Editing trip</h3>
                <form onSubmit={editTripFormOnSubmitHandler}>
                    <label forhtml='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                    <input type='text' value={editName} onChange={e => setEditName(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='name'/>
                    <div className='flex justify-column'>
                        <button className='btn' type='submit'>Edit</button>
                        <button className='btn' onClick={() => setBackDropModal(false)}>Cancel</button>
                    </div>
                </form>
            </BackDropModal>
        }
        </>

  )
}

export default TripTable
