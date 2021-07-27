import React from 'react'
import connexionIcon from "../assets/connexionIcon.svg"
import { Button, Grid, makeStyles } from "@material-ui/core"
import logo from '../assets/logoRemotab.png';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
 
    myBackground: {
        background: "#BDD5EA",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: "200px",
        alignSelf: "center"
    },
    headerLogo: {
        textAlign: "center"
    },
    connexionButton: {
        color: theme.palette.primary.light,
        textTransform: "none"
    },
    titleConnect: {
     //   marginBottom: "revert"
    },
    connexionForm: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: "-32px"
    },
    textPasswordForget:{
        marginTop: "-42px",
        marginBottom: "-12px"
    }
    
  }))

export default function ConnexionPage() {
    const classes = useStyles()
    
    return (
        <div className={classes.myBackground}>
            <Box
                bgcolor="#F7F7FF"
                borderRadius={10}
                boxShadow={5}
            >
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        className={classes.headerLogo}
                    >
                        <img src={logo} alt="logo" className={classes.logo}/>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                       // className={classes.headerLogo}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            height="100%"
                        >
                            <Typography
                                variant="h4"
                                className={classes.titleConnect}
                            >
                                Se connecter
                            </Typography>
                            <form
                                className={classes.connexionForm}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                >
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        marginBottom={35}
                                    >
                                        <label htmlFor="pseudo">Pseudo</label>
                                        <input
                                            name="pseudo"
                                            id="pseudo"
                                            //placeholder={dataElement.firstNameStudent}
                                            className="inputConnexionCustom"
                                        />
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <label htmlFor="passWord">Mot de passe</label>
                                        <input
                                            name="passWord"
                                            id="passWord"
                                            //placeholder={dataElement.firstNameStudent}
                                            className="inputConnexionCustom"
                                        />
                                    </Box>
                                </Box>
                                <Typography
                                    className={classes.textPasswordForget}
                                >
                                    Mot de passe oublié ?
                                </Typography>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    className={classes.connexionButton}
                                >
                                    Se connecter
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <img src={connexionIcon} alt=""/>
                    </Grid>

                </Grid>
                
            </Box>
            
        </div>
        
    )
}