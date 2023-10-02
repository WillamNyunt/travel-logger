import React from 'react';
import '../../scss/Widgets/LeftUtilityBar.scss';
import { LuMap} from "react-icons/lu";


const LeftUtilityBar = () => {
    return (
        <nav className="left-utility-bar">
            <button className="left-utility-bar__btn" data-tooltip='Trips'><LuMap/></button>
        </nav>
    )
}

export default LeftUtilityBar;