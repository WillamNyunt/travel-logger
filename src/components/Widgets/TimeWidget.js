//import react, usestate

import React from 'react';
import {useState, useEffect} from "react";
import '../../scss/Widgets/TimeWidget.scss';
import { format } from 'date-fns';

const TimeWidget = () => {
    const [time , setTime] = useState('')
    const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: 'numeric' };
    const today  = new Date();
    const dateToday = format(today, 'EEE, do MMM yyyy');


    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            //format date
        }, 1000)
    }, [])

    return (
        <div className="time-widget">
            <div className="time-widget__time">
            </div>
            <div className="time-widget__date">
                {dateToday}
            </div>
        </div>
    )
}

export default TimeWidget;