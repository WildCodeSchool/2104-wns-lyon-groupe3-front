import '../styles/toggle.scss';

import Agenda from '../components/Agenda';
import Class from '../components/Classes';
import Messages from '../components/Messages';
import NavBar from '../components/NavBar';
import ProfSettings from '../components/ProfSettings';
import logo from '../assets/logoRemotab.png';
import { makeStyles } from "@material-ui/core";
import { useLocation } from 'react-router';
import { useState } from 'react';

//TODO: introduire context et enlever les states
const useStyles = makeStyles(theme => ({
    myDiv: {
        background: theme.palette.primary.light,
        minHeight: "100vh",
        display: "flex"
    },
    myNav: {
        width: "600px",
        display: "flex"
    },
    myRightBlock: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    myHeader: {
        margin: "0 auto",
        padding: "15px"
    },
    myContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        position: "relative"
    },
    pseudoUser: {
        fontWeight: "bold",
        fontSize: "23px",
        paddingRight: "15px"
    },
    imageLogo: {
        width: "150px",
        alignSelf: "center"
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
                    <div>
                        <img className={classes.imageLogo} src={logo} alt="logo" />
                    </div>

                </div>
                {/* TODO: faire un composant pour le contenu qui change dynamiquement en fonction de l'User et du clic sur l'onglet */}
                <div className={classes.myContent}>
                    {home && <Agenda />}
                    {myClasses && <Class />}
                    {messages && <Messages />}
                    {setting && <ProfSettings/>}
                </div>
            </div>
        </div>
    )
}

export default HomePage;