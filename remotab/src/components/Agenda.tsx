import 'ui-neumorphism/dist/index.css';
import '../styles/neumorphism.css';
import { makeStyles } from '@material-ui/core/styles';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from "../events";
import * as dates from '../../src/utils/dates';
import React, { useState, useEffect, useReducer } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';


// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

interface Event {
    start: any,
    end: any,
    id: any
}

const appStyles = makeStyles(theme => ({
    calendarContainer: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        display: 'block',
        border: '1px solid black',
        padding: '.5em 0',
        textAlign: 'center',
        width: "800px"
    }
}))

const localizer = momentLocalizer(moment)

export default function Agenda() {

    const classes = appStyles();

    return (
        <div className={classes.calendarContainer}        >
            <Calendar
                events={events}
                // views={allViews}
                localizer={localizer}
                step={50}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                max={dates.add(dates.endOf(new Date(2021, 17, 1), 'day'), -1, 'hours')}
                defaultDate={new Date(2021, 7, 7)}
            />
        </div>
    )
};
