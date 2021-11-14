import '../styles/toggle.scss';

import React, { useState } from 'react';

import { Avatar } from 'ui-neumorphism';
import { Badge } from 'ui-neumorphism';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import { ThemeContext } from '../ThemeProvider';
import defaultImage from '../assets/defaultImage.png';
import logo from '../assets/logoRemotab.png';
import { makeStyles } from "@material-ui/core";
import { useContext } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    myUL: {
    },
    bodyNav: {
        height: "100vh",
        width: "30vw",
        background: theme.palette.primary.main,
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
    },
    myHeaderLeftBlock: {
        margin: "0 auto"
    },
    myHeaderRightBlock: {
        width: "15%",
        margin: "0 auto"
    },
    upperNav: {
        display: "flex",
        flexDirection: "row",
        height: "50px",
        position: "absolute",
        padding: "50px",
        alignItems: "center",
        justifyContent: "space-between"
    },
    displayNone: {
        display: "none"
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
    const classes = useStyles();
    const history = useHistory();
    const [homeIsActive, setHomeIsActive] = useState(true);
    const [classIsActive, setClassIsActive] = useState(false);
    const [messageIsActive, setMessageIsActive] = useState(false);
    const [settingIsActive, setSettingIsActive] = useState(false);
    const [userRole, setUserRole] = useState("student");
    const { theme, toggleTheme } = useContext(ThemeContext)

    //TODO:
    // Une fonction dymanique qui gère l'affichage des onglets
    // const handleHome = () => {
    //     setHome(true)
    //     setMyClasses(false)
    //     setMessages(false)
    //     setSetting(false)

    //     setHomeIsActive(true)
    //     setClassIsActive(false)
    //     setMessageIsActive(false)
    //     setSettingIsActive(false)
    // }

    // const handleClass = () => {
    //     setHome(false)
    //     setMyClasses(true)
    //     setMessages(false)
    //     setSetting(false)

    //     setHomeIsActive(false)
    //     setClassIsActive(true)
    //     setMessageIsActive(false)
    //     setSettingIsActive(false)
    // }

    // const handleMessage = () => {
    //     setHome(false)
    //     setMyClasses(false)
    //     setMessages(true)
    //     setSetting(false)

    //     setHomeIsActive(false)
    //     setClassIsActive(false)
    //     setMessageIsActive(true)
    //     setSettingIsActive(false)
    // }

    // const handleSetting = () => {
    //     setHome(false)
    //     setMyClasses(false)
    //     setMessages(false)
    //     setSetting(true)

    //     setHomeIsActive(false)
    //     setClassIsActive(false)
    //     setMessageIsActive(false)
    //     setSettingIsActive(true)
    // }

    return (
        <div className="myBodyNav">
            <div className={classes.bodyNav} id="bodyNav">
                <div className={classes.upperNav}>
                    <div className={classes.myHeaderLeftBlock}>
                        <Avatar src={defaultImage} size={70} />
                        <div className={classes.displayNone}>
                            <ExitToAppIcon className={classes.footerIcon} onClick={() => history.push("/")} />
                            <span className={classes.footerSpan}>Se déconnecter</span>
                        </div>
                    </div>
                    <div className={classes.myHeaderRightBlock}>
                        <input
                            type="checkbox"
                            id="toggle-input"
                            // onClick={toggleTheme}
                            // onChange={() => false}
                            // checked={window.localStorage.getItem('theme') === 'light'}
                        />
                        <label className="myLabel" htmlFor="toggle-input">
                            <Brightness5Icon className="lu" fontSize="small" />
                            <span className="mySpan">
                                <svg width="10px" height="10px">
                                </svg>
                            </span>
                            <Brightness3Icon fontSize="small" className="lo" />
                        </label>
                    </div>
                </div>
                {/* Dynamic mapping */}
                {/* <ul className={classes.myUL}>
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
                </ul>*/
                }
            </div>
        </div>
    )
}
