import React from 'react'
import '../../scss/Widgets/TopInfoBar.scss';
import { useSelector } from 'react-redux';


export default function TopInfoBar() {
    const trip = useSelector(state => state.trip.trip);
    return (
    <div className='topInfoBar'>Trip: {trip ? trip.name : 'None'}</div>
  )
}
