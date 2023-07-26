import React from 'react';
import TimeWidget from "../Widgets/TimeWidget";
import '../../scss/DesktopBar/DekstopBar.scss';
const DesktopBar = () => {
    return (
        <div className="desktop-bar">
            <TimeWidget />
        </div>
    )
}
export default DesktopBar;