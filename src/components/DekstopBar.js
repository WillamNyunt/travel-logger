import React from 'react';
import TimeWidget from "./Widgets/TimeWidget";
import '../scss/DesktopBar/DekstopBar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../slices/theme';

const DesktopBar = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    
    const toggleTheme = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        dispatch(setTheme(newTheme));
    };

    return (
        <div className="desktop-bar">
            <TimeWidget theme={theme} />
            <button onClick={toggleTheme}>Toggle Theme</button>
             <div className={theme === 'light-theme' ? 'light-theme' : 'dark-theme'}>
            </div>
        </div>
    )
}
export default DesktopBar;