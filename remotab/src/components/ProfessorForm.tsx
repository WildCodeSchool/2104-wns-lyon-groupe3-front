import { Card, CardContent, Subtitle2, ToggleButton, Button } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import '../styles/neumorphism.css'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logoRemotab.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddProfessor from '../components/AddProfessor';
import { Add } from '@material-ui/icons';
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";


const ALL_PROFS = gql`
query GetAllProfessors {
  allUsers {
    id
    firstName
    lastName
    titre
    photoProfil
    emailAddress
    phoneNumber
    Adress {
      street
      postalCode
      town
    }
  }
}
`;


const useStyles = makeStyles(theme => ({
    page: {
        background: theme.palette.primary.light,
    },
    logo: {
        width: 250,
    },
    myNav: {
        display: "flex",
        justifyContent: "center",
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
    exitButton: {
        fontSize: "30px",
        color: theme.palette.secondary.light
    },
    mySpan: {
        fontStyle: "italic",
        color: "#0A2463"
    },
    main: {
        background: theme.palette.primary.dark,
        width: "70vw",
        margin: "150px auto",
        display: "flex",
        flexDirection: "column",
        height: "auto"
    },
    mySearchItem: {
        position: "absolute",
        right: "50px",
        top: "20px",
        color: "orangered"
    },
    profCards: {
        display: 'inline-flex',
        overflow: "auto",
        justifyContent: "space-evenly",
        padding: 40,
        margin: 20,
        border: "1px solid #F7F7FF",
        borderRadius: "12px"
    },
    card: {
        margin: 15
    },
    cardContent: {
        display: "flex",
    },
    cardDescription: {
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize: 16,
        textAlign: "justify"
    },
    image: {
        marginRight: 10
    },
    detailsButton: {
        marginTop: "10px",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
    },
    addProfForm: {
        padding: 20,
        margin: 20,
        border: "1px solid #F7F7FF",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column"
    },
    addProf: {
        margin: "0 auto",
        textTransform: "uppercase",
        fontFamily: "Alef,sans-serif",
        color: theme.palette.primary.contrastText
    },
    formBody: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column"
    },
    asideContainer: {
        margin: "150px auto",
        display: "flex",
        flexDirection: "column",
        height: "auto"
    },
    asideCards: {
        height: 200,
        margin: 15,
        background: theme.palette.primary.main,
        display: "flex"
    },
    asideCardsContent: {
        font: "Cabin",
        textTransform: "uppercase",
        textAlign: "center",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        alignSelf: "center",
        margin: "10 auto"
    },
    searchBarContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "stretch",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "5px",
        margin: " 15px",
        width: "50%",
        boxShadow: ".3rem .3rem .6rem #c3c3c3, -.2rem -.2rem .5rem #fff"
    },
    searchIcon: {
        position: "absolute",
        display: "flex",
        fill: theme.palette.secondary.light,
        marginRight: " 2px"
    },
    searchInput: {
        padding: "10px",
        width: "100%",
        borderRadius: "10px",
        border: "none",
        marginBottom: "0",
        boxShadow: "inset .2rem .2rem .5rem #c3c3c3, inset -.2rem -.2rem .5rem #fff",
        color: " #c3c3c3",
        outline: "none"
    }
}));

export default function ProfessorForm() {
    const { loading, error, data } = useQuery(ALL_PROFS);
    const classes = useStyles();

    if (loading) {
        return <p> Loading...</p>
    }
    console.log(data.allUsers.map((user: any) => user.firstName))

    if (error) {
        return <p>Error...</p>
    }

    return (

        data &&
        <div className={classes.page}>
            <div className={classes.myNav}>
                <div className={classes.myDivExitButton}>
                    <span className={classes.mySpan}>Se déconnecter</span>
                    <ExitToAppIcon className={classes.exitButton} />
                </div>

                <img src={logo} alt="logo" className={classes.logo} />
                <button className="toggleButtonNameAdmin">
                    <span className={classes.mySpan}>Nom admin</span>
                </button>

            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>

                <Card className={classes.main}>
                    <div style={{ display: "flex", justifyContent : "flex-end"}}>
                        <div  className={classes.searchBarContainer}>
                            <input type="text" name="search" className={classes.searchInput} placeholder="Recherche professeur par nom..." />
                            <svg className={classes.searchIcon} width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
                        </div>
                    </div>
                    <div className={classes.profCards}>
                        {data.allUsers.map((currentUser: any) =>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <img src={currentUser.photoProfil} alt="professor-avatar" className={classes.image} />
                                    <div className={classes.cardDescription}>
                                        <Subtitle2 secondary className={classes.title} >
                                            {currentUser.firstName}
                                        </Subtitle2>
                                        <Subtitle2 secondary className={classes.title} >
                                            {currentUser.titre}
                                        </Subtitle2>
                                        <Button className={classes.detailsButton} bordered>Détails</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                    <AddProfessor />
                </Card>

                <div className={classes.asideContainer}>
                    <Card className={classes.asideCards}>
                        <CardContent className={classes.asideCardsContent}>
                            Gestion des élèves
                            </CardContent>
                    </Card>
                    <Card className={classes.asideCards}>
                        <CardContent className={classes.asideCardsContent}>
                            Gestion des classes
                            </CardContent>
                    </Card>
                    <Card className={classes.asideCards}>
                        <CardContent className={classes.asideCardsContent}>
                            Gestion des messages
                            </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
};
