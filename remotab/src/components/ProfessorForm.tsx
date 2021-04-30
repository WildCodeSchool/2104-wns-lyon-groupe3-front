import { Card, CardContent, Subtitle2, ToggleButton } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import '../styles/neumorphism.css'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logoRemotab.png';
import prof1 from '../assets/prof1.png';
import prof2 from '../assets/prof2.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
        width: "80vw",
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
        justifyContent: "space-evenly",
        padding: 40,
        margin: 20,
        border: "1px solid #F7F7FF",
        borderRadius: 20
    },
    card: {
        width: 200,
        margin: 15
    },
    cardContent: {
        display: "inline-flex",
    },
    cardDescription: {
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontSize: 16,
    },
    image: {
        width: 60,
        marginRight: 10
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
    }

}));

export default function ProfessorForm() {
    const classes = useStyles();

    return (
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
            <Card className={classes.main}>
                <div className={classes.profCards}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <img src={prof1} alt="professor-avatar" className={classes.image} />
                            <div className={classes.cardDescription}>
                                <Subtitle2 secondary className={classes.title} >
                                    Nom
                </Subtitle2>
                                <Subtitle2 secondary className={classes.title} >
                                    Titre
                </Subtitle2></div>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <img src={prof2} alt="professor-avatar" className={classes.image} />
                            <div className={classes.cardDescription}>
                                <Subtitle2 secondary className={classes.title} >
                                    Nom
                </Subtitle2>
                                <Subtitle2 secondary className={classes.title} >
                                    Titre
                </Subtitle2></div>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <img src={prof1} alt="professor-avatar" className={classes.image} />
                            <div className={classes.cardDescription}>
                                <Subtitle2 secondary className={classes.title} >
                                    Nom
                </Subtitle2>
                                <Subtitle2 secondary className={classes.title} >
                                    Titre
                </Subtitle2></div>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <img src={prof2} alt="professor-avatar" className={classes.image} />
                            <div className={classes.cardDescription}>
                                <Subtitle2 secondary className={classes.title}>
                                    Nom
                </Subtitle2>
                                <Subtitle2 secondary className={classes.title} >
                                    Titre
                </Subtitle2>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className={classes.addProfForm}>
                    <div className={classes.addProf}>
                        <h2>Ajouter un nouveau professeur</h2>
                    </div>
                    <form action="#" method="post" className={classes.formBody}>
                        <div>
                            <label >Prenom</label>
                            <input type="text" id="fname" name="fname" value="Entrez un prénom" />
                            <label>Nom</label>
                            <input type="text" id="lname" name="lname" value="Entrez un nom" />
                            <label>Adresse mail</label>
                            <input type="email" id="email" name="email" value="Entrez l'adresse mail" />
                        </div>
                        <div>
                            <label>Adresse mail</label>
                            <input type="email" id="email" name="email" value="Entrez l'adresse mail" />
                            <label>Adresse mail</label>
                            <input type="email" id="email" name="email" value="Entrez l'adresse mail" />
                            <label>Adresse mail</label>
                            <input type="email" id="email" name="email" value="Entrez l'adresse mail" />
                        </div>
                        <label>Numéro de téléphone</label>
                        <input type="number" id="mobile" name="mobile" value="Entrez le numéro de téléphone" />
                        <button type="submit">Ajouter</button>
                    </form>
                </div>
            </Card>
            <div>
                <Card><CardContent>Gestion des élèves</CardContent></Card>
                <Card><CardContent>Gestion des classes</CardContent></Card>
                <Card><CardContent>Gestion des messages</CardContent></Card>
            </div>
        </div>
    )
};
