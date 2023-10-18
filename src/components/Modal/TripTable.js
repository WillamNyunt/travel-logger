import React from 'react'
import { useGetTripsQuery } from 'src/slices/trip';
import { Skeleton } from '@mui/material';
import './TripTable.scss';

const TripTable =  () => {

    const { data, error, isLoading} = useGetTripsQuery('iSojVlIFhQh631bOJmvM6HLZV1I2');

  return (
    <>
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
            <table className='w-full'>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody className='w-full'>
                {data ? 
                    data.map((trip) => (
                    <tr className='w-full trip-table' key={trip.id}>
                        <td className='w-full hover:bg-gray-400 cursor-pointer trip-table__row-data'>{trip.name}</td>
                        <td className='w-full hover:bg-gray-400 cursor-pointer trip-table__row-utility'>
                            <span className='trip-table__mini-modal'>
                                <button className='btn' onClick={() => {console.log(trip.id)}}>Edit</button>
                                <button className='btn' onClick={() => {console.log(trip.id)}}>Delete</button>
                            </span>...</td>
                    </tr>
                )) : 
                    <div>No Trips</div>
                }
            </tbody>
        </table>
        }
        </>

  )
}

export default TripTable
