import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../slices/theme';
import '../../scss/Widgets/DarkModeBtn.scss';

const DarkModeBtn = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
        dispatch(setTheme(newTheme));
    };
    return (
                <button className={`dark-mode-btn ${theme === 'light-theme' ? 'light-theme' : 'dark-theme'}`} onClick={toggleTheme}>
                    <span></span>
                </button>
    )
}

export default DarkModeBtn;