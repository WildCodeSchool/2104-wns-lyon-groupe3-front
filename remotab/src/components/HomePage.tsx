import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"
import { useLocation } from 'react-router'
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import '../styles/toggle.scss'
import { Avatar } from 'ui-neumorphism';

import defaultImage from '../assets/defaultImage.png'
import NavBar from './NavBar';
import Agenda from './Agenda';
import Messages from './Messages';
import Setting from './Setting';
import Class from './Class'


const useStyles = makeStyles(theme => ({
    myDiv: {
        background: theme.palette.primary.light,
        minHeight: "100vh",
        display: "flex"
    },
    myNav: {
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    myRightBlock: {
        width: "-webkit-fill-available",
        display: "flex",
        flexDirection: "column"
    },
    myHeader: {
        height: "90px",
        display: "flex",
        alignItems: "center",
    },
    myContenu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "-webkit-fill-available"
    },
    myHeaderRightBlock: {
        display: "flex",
        alignItems: "center",
        width: "15%",
        justifyContent: "space-evenly",
        marginLeft: "-55px"
    },
    myHeaderLeftBlock: {
        width: "85%",
        display: "flex",
        justifyContent: "center"
    },
    pseudoUser: {
        fontWeight: "bold",
        fontSize: "23px",
        paddingRight: "15px"
    }
}))

interface LocationState {
    pseudoUser: string
  }

const HomePage = () => {
    const classes = useStyles()
    const location = useLocation<LocationState>()
    const [checked, setChecked] = useState(false)

    const [home, setHome] = useState(true)
    const [myClasses, setMyclasses] = useState(false)
    const [messages, setMessages] = useState(false)
    const [setting, setSetting] = useState(false)

    return (
        <div className={classes.myDiv}>
            <div className={classes.myNav}>
                <NavBar
                    home={home}
                    myClasses={myClasses}
                    messages={messages}
                    setting={setting}
                    setHome={setHome}
                    setMyClasses={setMyclasses}
                    setMessages={setMessages}
                    setSetting={setSetting}
                />
            </div>
            <div className={classes.myRightBlock}>
                <div className={classes.myHeader}>
                    <div className={classes.myHeaderLeftBlock}>
                        <input
                            type="checkbox"
                            id="toggle-input"
                            //checked={checked}
                        />
                        <label className="myLabel" htmlFor="toggle-input">
                            <Brightness5Icon className="lu" fontSize="small" />
                            <span className="mySpan">
                                <svg width="10px" height="10px">
                                    
                                </svg>
                            </span>
                            <Brightness3Icon fontSize="small"  className="lo"/>
                        </label>
                    </div>
                    <div className={classes.myHeaderRightBlock}>
                        <span className={classes.pseudoUser} >{location.state.pseudoUser}</span>
                        <Avatar src={defaultImage} size={70} />
                    </div>
                </div>
                <div className={classes.myContenu}>
                    {home && <Agenda />}
                    {myClasses && <Class />}
                    {messages && <Messages />}
                    {setting && <Setting/>}
                </div>
            </div>
        </div>
    )
}

export default HomePage;