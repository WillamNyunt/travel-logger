import React from 'react'

const TripTable =  (props) => {
  return (
    <table className='w-full'>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody className='w-full'>
            {props.data ? 
                props.data.map((trip) => (
                <tr className='w-full' key={trip.id}>
                    <td className='w-full hover:bg-gray-400 cursor-pointer'>{trip.name}</td>
                </tr>
            )) : 
                <div>No Trips</div>
            }
        </tbody>
    </table>
  )
}

export default TripTable
