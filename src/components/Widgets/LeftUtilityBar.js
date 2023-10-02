import React from 'react';
import '../../scss/Widgets/LeftUtilityBar.scss';
import { CiMap } from "react-icons/ci";

const LeftUtilityBar = () => {
    return (
        <nav className="left-utility-bar">
            <button className="left-utility-bar__btn"><CiMap/></button>
        </nav>
    )
}

export default LeftUtilityBar;