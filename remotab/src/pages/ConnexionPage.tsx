import React from 'react'
import connexionIcon from "../assets/connexionIcon.svg"
import { Button, Grid, makeStyles } from "@material-ui/core"
import logo from '../assets/logoRemotab.png';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router"

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
        marginLeft: "-50px",
        fontWeight: "bold"
    },
    connexionForm: {
        height: "68%",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "space-evenly",
       // marginTop: "-32px"
    },
    textPasswordForget:{
        marginTop: "-25px",
        marginBottom: "22px",
        color: theme.palette.secondary.light,
    }
    
  }))

export default function ConnexionPage() {
    const classes = useStyles()
    const history = useHistory()

    const [pseudo, setPseudo] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        const target = event.target as typeof event.target & {
            pseudo: { value: string };
            password: { value: string };
        };
        
        console.log(target.password.value)
    }

    const connectToPlatform = () => {
        history.push("/admin")
    }
    
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
                                onSubmit={handleSubmit}
                                className={classes.connexionForm}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    height="80%"
                                    justifyContent= "space-evenly"
                                >
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                       // marginBottom={35}
                                    >
                                        <label htmlFor="pseudo" style={{marginBottom: 10}}>Pseudo ou email</label>
                                        <input
                                            name="pseudo"
                                            id="pseudo"
                                            value={pseudo}
                                            onChange={(e)=>setPseudo(e.currentTarget.value)}
                                            className="inputConnexionCustom"
                                        />
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <label htmlFor="password" style={{marginBottom: 10}}>Mot de passe</label>
                                        <input
                                            name="password"
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e)=>setPassword(e.currentTarget.value)}
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
                                    type="submit"
                                    onClick={connectToPlatform}
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