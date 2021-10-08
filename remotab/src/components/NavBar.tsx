import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';

import logo from '../assets/logoRemotab.png';
import { useHistory } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import '../styles/toggle.scss';
import { Badge } from 'ui-neumorphism';


const useStyles = makeStyles(theme => ({

    imageLogo: {
        width: "150px",
        alignSelf: "center"
    },
    myUL: {

    },
    bodyNav: {
        height: "80%",
        width: "95%",
        background: theme.palette.primary.main,
        borderRadius: "5px"
    },
    footerLogOut: {
        display: "flex",
    },
    footerSpan: {
        fontStyle: "italic",
        marginLeft: "12px"
    },
    footerIcon: {
        color: theme.palette.primary.main,
        "&:hover": {
            cursor: "pointer"
        }
    }
}))

type navProto = {
    home: boolean,
    myClasses: boolean,
    messages: boolean,
    setting: boolean,
    setHome: any,
    setMyClasses: any,
    setMessages: any,
    setSetting: any
}


export default function NavBar({ home, myClasses, messages, setting, setHome, setMyClasses, setMessages, setSetting }: navProto) {
    const classes = useStyles()
    const history = useHistory()
    const [homeIsActive, setHomeIsActive] = useState(true)
    const [classIsActive, setClassIsActive] = useState(false)
    const [messageIsActive, setMessageIsActive] = useState(false)
    const [settingIsActive, setSettingIsActive] = useState(false)

    const handleHome = () => {
        setHome(true)
        setMyClasses(false)
        setMessages(false)
        setSetting(false)

        setHomeIsActive(true)
        setClassIsActive(false)
        setMessageIsActive(false)
        setSettingIsActive(false)
    }

    const handleClass = () => {
        setHome(false)
        setMyClasses(true)
        setMessages(false)
        setSetting(false)

        setHomeIsActive(false)
        setClassIsActive(true)
        setMessageIsActive(false)
        setSettingIsActive(false)
    }

    const handleMessage = () => {
        setHome(false)
        setMyClasses(false)
        setMessages(true)
        setSetting(false)

        setHomeIsActive(false)
        setClassIsActive(false)
        setMessageIsActive(true)
        setSettingIsActive(false)
    }

    const handleSetting = () => {
        setHome(false)
        setMyClasses(false)
        setMessages(false)
        setSetting(true)

        setHomeIsActive(false)
        setClassIsActive(false)
        setMessageIsActive(false)
        setSettingIsActive(true)
    }

    return (
        <div className="myBodyNav">
            <div>
                <img className={classes.imageLogo} src={logo} alt="logo" />
            </div>
            <div className={classes.bodyNav} id="bodyNav">
                <ul className={classes.myUL}>
                    <li onClick={handleHome} className={homeIsActive ? "active" : ""}>
                        <HomeIcon className="myIconNav" />
                        <span>Accueil</span>
                    </li>
                    <li onClick={handleClass} className={classIsActive ? "active" : ""} >
                        <PeopleIcon className="myIconNav" />
                        <span> Classes </span>
                    </li>
                    <li onClick={handleMessage} className={messageIsActive ? "active" : ""}>
                        <Badge
                            bgColor='var(--error)'
                            color='var(--white)'
                            content={0}
                            className="myBadge">
                            <MessageIcon className="myIconNav" />
                        </Badge>
                        <span>Messages</span>
                    </li>
                    <li onClick={handleSetting} className={settingIsActive ? "active" : ""}>
                        <SettingsIcon className="myIconNav" />
                        <span>Paramètres</span>
                    </li>
                </ul>
            </div>
            <div className={classes.footerLogOut}>
                <ExitToAppIcon className={classes.footerIcon} onClick={() => history.push("/")} />
                <span className={classes.footerSpan}>Se déconnecter</span>
            </div>
        </div>
    )

}