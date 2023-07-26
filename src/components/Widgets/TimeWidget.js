//import react, usestate

import React from 'react';
import {useState, useEffect} from "react";
import '../../scss/Widgets/TimeWidget.scss';

const TimeWidget = () => {
    const [time , setTime] = useState('')
    const [date , setDate] = useState('')
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    const dateToday = today.toLocaleDateString("en-UK", options)


    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            //format date
        }, 1000)
    }, [])

    return (
        <div className="time-widget">
            <div className="time-widget__time">
                {time}
            </div>
            <div className="time-widget__date">
                {dateToday}
            </div>
        </div>
    )
}

export default TimeWidget;