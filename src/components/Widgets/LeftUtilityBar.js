import React from 'react';
import '../../scss/Widgets/LeftUtilityBar.scss';
import { LuMap} from "react-icons/lu";
import { useDispatch } from 'react-redux';
import setTripModal from '../../slices/tripModal';


const LeftUtilityBar = () => {
    const dispatch = useDispatch();

    const openTripModal = () => {
        dispatch(setTripModal(true))
    }


    return (
        <nav className="left-utility-bar">
            <button className="left-utility-bar__btn" data-tooltip='Trips' onClick={openTripModal}><LuMap/></button>
        </nav>
    )
}

export default LeftUtilityBar;