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
    const setMap = () => {
        console.log(cursor)
        const toggledCursor = cursor === 'cursor-add' ? 'cursor-pointer' : 'cursor-add';
        console.log(toggledCursor)
        dispatch(setCursor(toggledCursor));
        map._container.classList.forEach(className => {
            if (className.startsWith('cursor-')) {
                map._container.classList.remove(className);
            }
        })
        map._container.classList.add(toggledCursor); 
    }

  return (
    <div className='topUtilityBar'>
        <button className={`topUtilityBar-item -add-location ${cursor === 'cursor-pointer' ? 'active' : ''}`}
        data-tooltip='Add note'
        onClick={() => setMap()}>
            <IoAddCircle />
        </button>
    </div>
  )
}
