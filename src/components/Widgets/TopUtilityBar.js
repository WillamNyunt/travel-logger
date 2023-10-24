import React from 'react'
import '../../scss/Widgets/TopUtilityBar.scss';
import { IoAddCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setCursor } from '../../slices/map';
import { useMap } from 'react-leaflet';

export default function TopUtilityBar() {
    const dispatch = useDispatch();
    const map = useMap();
    const cursor = useSelector(state => state.map.cursor)
    const setMap = cursor => {
        dispatch(setCursor(cursor));
        console.log(map._container.classList)
        map._container.classList.forEach(className => {
            if (className.startsWith('cursor-')) {
                map._container.classList.remove(className);
            }
        })
        map._container.classList.add('cursor-add'); 
    }

  return (
    <div className='topUtilityBar'>
        <button className='topUtilityBar-item -add-location'
        data-tooltip='Add content'
        onClick={() => setMap('cursor-add')}>
            <IoAddCircle />
        </button>
    </div>
  )
}
