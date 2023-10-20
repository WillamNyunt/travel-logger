import React from 'react'
import '../../scss/Widgets/TopUtilityBar.scss';
import { useSelector } from 'react-redux';


export default function TopUtilityBar() {
    const trip = useSelector(state => state.trip.trip);
    return (
    <div className='topUtilityBar'>Trip: {trip ? trip.name : 'None'}</div>
  )
}
