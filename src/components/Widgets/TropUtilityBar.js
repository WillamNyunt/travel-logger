import React from 'react'
import '../../scss/Widgets/TopUtilityBar.scss';
import { useSelector } from 'react-redux';


export default function TropUtilityBar() {
    const trip = useSelector(state => state.trip.selectedTrip);
    return (
    <div className='topUtilityBar'>Selected Trip: Vietnam</div>
  )
}
