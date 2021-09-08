import 'ui-neumorphism/dist/index.css';
import '../styles/neumorphism.css';
import { makeStyles } from '@material-ui/core/styles';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr'; 
import events from "../../src/utils/events";
import * as dates from '../../src/utils/dates';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button } from 'ui-neumorphism';
import GroupIcon from '@material-ui/icons/Group';

interface Event {
    start: any,
    end: any,
    id: any
}

const appStyles = makeStyles(theme => ({
    calendarStyle: {
        backgroundColor: theme.palette.primary.light,
        color: 'black',
        border: '1px solid black',
        padding: '10px',
        margin: "0 auto",
        marginTop: "-10px",
        width: "90%",
        height: "550px"
    },
    calendarContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        
    },
    buttonStyle: {
        backgroundColor: '#F7F7FF',
        color: theme.palette.secondary.light,
        marginTop: '10px',
        
    }
}))

const localizer = momentLocalizer(moment)

export default function Agenda() {

    const classes = appStyles();

    return (
        <div className={classes.calendarContainer}        >
            <Calendar className={classes.calendarStyle}
                events={events}
                localizer={localizer}
                step={60}
                startAccessor="start"
                endAccessor="end"
                max={dates.add(dates.endOf(new Date(2021, 17, 1), 'day'), -1, 'hours')}
                defaultDate={new Date(2021, 3, 14, 17, 0, 0)}
                defaultView={Views.DAY}
                messages={{
                    next: 'Suivant',
                    previous: 'Précédent',
                    today: "Aujourd'hui",
                    month: 'Mois',
                    week: 'Semaine',
                    day: 'Jour',
                    allDay: 'Toute la journée',
                    yesterday: 'Hier',
                    tomorrow: 'Demain',
                    noEventsInRange: 'Aucun événement prévu',
                    showMore: function showMore(total) {
                      return '+' + total + ' de plus';
                    },
                    time: "Heures",
                    event: "Evénement"
          }}
            />

            <Button className={classes.buttonStyle} size="large">
                <GroupIcon style={{ marginRight: "5px" }} />
                Accéder à ma classe
            </Button>
        </div>
    )
};