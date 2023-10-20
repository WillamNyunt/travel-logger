import React from 'react';
import '../../scss/Widgets/LeftUtilityBar.scss';
import { LuMap, LuBook} from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { setTripModal, setNoteModal } from '../../slices/modal';


const LeftUtilityBar = () => {
    const dispatch = useDispatch();

    const openTripModal = () => {
        dispatch(setTripModal(true))
    }



    return (
        <nav className="left-utility-bar">
            <button className="left-utility-bar__btn" data-tooltip='Trips' onClick={() => openTripModal(true)}><LuMap/></button>
            <button className="left-utility-bar__btn" data-tooltip='Notes' onClick={() => {dispatch(setNoteModal(true))}}><LuBook/></button>
        </nav>
    )
}

export default LeftUtilityBar;