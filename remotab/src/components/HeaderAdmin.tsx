import React from 'react'
import { makeStyles } from "@material-ui/core"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../assets/logoRemotab.png';
import {useHistory} from "react-router"


const useStyles = makeStyles(theme => ({
    myBackground: {
        background: "#F7F7FF",
        minHeight: "100vh"
      },
      toggleButtonNameAdmin: {
        position: "absolute",
        top: "20px",
        right: "80px",
        width: "150px"
      },
      logo: {
        width: "250px",
      },
      myNav: {
        display: "flex",
        justifyContent: "center",
        //marginBottom: "200px"
      },
      exitButton: {
        fontSize: "30px",
        color: "#FE5F55",
        cursor: "pointer"
      },
      myDivExitButton: {
        top: "20px",
        left: "80px",
        height: "50px",
        width: "160px",
        display: "flex",
        position: "absolute",
        justifyContent: "space-evenly",
        alignItems: "center"
      },
      mySpan: {
        fontStyle: "italic",
        color: "#0A2463"
      }
}))

type nameProto = {
  name: String
}

const HeaderAdmin = ({name}:nameProto) => {
    const classes = useStyles()
    const history = useHistory()

    const loginOut = () => {
        history.push('/')
    }

    return (
        <div className={classes.myNav}>
            <div className={classes.myDivExitButton}>
                <span className={classes.mySpan}>Se déconnecter</span>
                <ExitToAppIcon
                    onClick={loginOut}
                    className={classes.exitButton}
                />
            </div>
                
            <img src={logo} alt="logo" className={classes.logo}/>
            <button
                //color="#0A2463 "
                //bordered={true}
                className="toggleButtonNameAdmin"
            >
            <span className={classes.mySpan}>{name}</span>
            </button> 
        </div>
    )
}

export default HeaderAdmin;