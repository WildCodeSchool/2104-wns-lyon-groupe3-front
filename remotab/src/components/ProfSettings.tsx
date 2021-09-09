import React, { useState } from 'react';
import '../styles/theme';
import 'ui-neumorphism/dist/index.css';
import { makeStyles } from "@material-ui/core";
import { UPDATE_USER, ALL_PROFS } from '../components/Queries';
import { useQuery, useMutation } from "@apollo/client";
import { Avatar, Button } from 'ui-neumorphism';
import avatar from "../assets/avatar.jpg";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import showPwdImg from '../assets/show-password.svg';
import hidePwdImg from '../assets/hide-password.svg';


const useStyles = makeStyles(theme => ({
    bigContainer: {
        backgroundColor: "white",
        height: "80vh",
        display: "grid"
    },
    container: {
    },
    informationContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        height: "60%"
    },
    buttonStyle: {
        height: "35px",
        width: "300px",
        backgroundColor: '#FE5F55',
        color: '#F7F7FF',
        margin: "0 auto"
    },
    sideContainer: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column"
    },
    avatarStyle: {
        display: "flex",
        justifyContent: "space-between",
    },
    photoUpdate: {
        display: "flex",
        flexDirection: "column"
    },
    fieldStyle: {
        display: "grid"
    },
    inputCustom: {
        width: "200px",
        height: " 40px",
        borderRadius: "5px",
        borderColor: "transparent",
        borderWidth: "0",
        background: "#e4ebf5",
        boxShadow: "inset -2px -2px 5px #ffffff, inset 2px 2px 5px #bec8e4",
        textAlign: "center",
    },
    iconStyle: {
        alignSelf: "center",
        color: theme.palette.secondary.light
    },
    pwdContainer: {
        position: "relative"
    },
    pwdContainerImg: {
        cursor: "pointer",
        position: "absolute",
        width: "20px",
        right: "8px",
        top: "8px",
        filter: "invert(52%) sepia(78%) saturate(2837%) hue-rotate(328deg) brightness(105%) contrast(99%)"
    }
}))

const initialData = {
    "getAllUsers": [
        {
            "_id": "",
            "firstname": "",
            "lastname": "",
            "role": "",
            "picture": avatar,
            "email": "",
            "password": "",
            "isActive": "",
            "phoneNumberProf": "",
            "addressInput": {
                "street": "",
                "postalCode": "",
                "city": ""
            }
        }
    ]
}

export default function ProfSettings() {

    const classes = useStyles();

    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);


    const { loading, error, data, refetch } = useQuery(ALL_PROFS);

    if (loading) {
        return <div data-testid="loading-message">Chargement en cours...</div>
    }

    if (error) {
        return <div data-testid="error-message">Erreur...</div>
    }

    const filteredDatas = data.getAllUsers.filter((el: any) => {
        return el.role === "TEACHER"
    })

    return (
        data &&
        <div className={classes.bigContainer}>
            {filteredDatas.map((dataElement: any) =>
                <div className={classes.container}>
                    <div className={classes.informationContainer}>
                        <div className={classes.sideContainer}>
                            <span className={classes.fieldStyle}>Prénom  <strong><input value={dataElement.firstname} className={classes.inputCustom} /></strong></span>
                            <span className={classes.fieldStyle}>Adresse mail  <strong><input value={dataElement.email} className={classes.inputCustom} /></strong></span>
                            <span className={classes.fieldStyle}>Mot de passe
                                <div className={classes.pwdContainer}>
                                    <input value={dataElement.password} className={classes.inputCustom} 
                                    type={isRevealPwd ? "text" : "password"}
                                        onChange={(e: any) => setPwd(e.target.value)} />
                                        <img 
                                         className={classes.pwdContainerImg} 
                                        title={isRevealPwd ? "Hide password" : "Show password"}
                                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                                        onClick={() => setIsRevealPwd(prevState => !prevState)}/>
                                </div>
                            </span>
                        </div>
                        <div className={classes.sideContainer}>
                            <span className={classes.fieldStyle}>Nom <strong><input value={dataElement.lastname} className={classes.inputCustom} /></strong></span>
                            <span className={classes.fieldStyle}>Numéro de téléphone  <strong><input value={dataElement.phoneNumberProf} className={classes.inputCustom} /></strong></span>
                            <div className={classes.avatarStyle}>
                                <Avatar><img src={dataElement.picture} /></Avatar>
                                <div className={classes.photoUpdate}>
                                    <span>Modifier ma photo</span>
                                    <CameraAltIcon className={classes.iconStyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }
            <Button
                className={classes.buttonStyle}
            >
                Enregistrer les modifications
            </Button>
        </div >
    )
}