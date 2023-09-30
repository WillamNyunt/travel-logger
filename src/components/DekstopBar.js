import React from 'react';
import TimeWidget from "./Widgets/TimeWidget";
import { useSelector } from 'react-redux';
import '../scss/DesktopBar/DekstopBar.scss';

const DesktopBar = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className="desktop-bar">
            <TimeWidget theme={theme} />
        </div>
    )
}
export default DesktopBar;