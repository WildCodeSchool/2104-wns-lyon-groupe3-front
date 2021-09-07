import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"
import { useLocation } from 'react-router'
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import '../styles/toggle.scss'
import { Avatar } from 'ui-neumorphism';

import defaultImage from '../assets/defaultImage.png'


const useStyles = makeStyles(theme => ({
    myDiv: {
        background: theme.palette.primary.light,
        minHeight: "100vh",
        display: "flex"
    },
    myNav: {
        backgroundColor: "blue",
        width: "500px"
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
        backgroundColor: "yellow",
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
    }
}))

interface LocationState {
    pseudoUser: string
  }

const HomePage = () => {
    const classes = useStyles()
    const location = useLocation<LocationState>()
    const [checked, setChecked] = useState(false)

    return (
        <div className={classes.myDiv}>
            <div className={classes.myNav}>
                navigation
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
                        <span><strong>{location.state.pseudoUser}</strong></span>
                        <Avatar src={defaultImage} size={70} />
                    </div>
                </div>
                <div className={classes.myContenu}>
                    contenu
                </div>
            </div>
        </div>
    )
}

export default HomePage;