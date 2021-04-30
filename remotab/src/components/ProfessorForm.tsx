import React from 'react';
import { Button, Card, CardContent, Subtitle2 } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logoRemotab.png';
import prof1 from '../assets/prof1.png';
import prof2 from '../assets/prof2.png';

const useStyles = makeStyles({
    profCards: {
        display: 'inline-flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        marginTop: 250,
    },
    card: {
        width: 200,
    },
    title: {
        fontSize: 16,
    },
    image: {
        width: 50,
    },
    logo: {
        width: 250,
    },
    headerBox: {
        display: 'inline-flex',
        alignItems: 'center',
        width: 400,
        marginLeft: 600
    },
    addProf: {

    }

});

export default function ProfessorForm() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.headerBox}>
                <img src={logo} alt="logo" className={classes.logo} />
                <Button color='var(--primary)'>Nom Admin</Button>
            </Box>
            <div className={classes.profCards}>
                <Card className={classes.card}>
                    <CardContent>
                        <img src={prof1} alt="professor-avatar" className={classes.image} />
                        <Subtitle2 secondary className={classes.title} >
                            Nom
                </Subtitle2>
                        <Subtitle2 secondary className={classes.title} >
                            Title
                </Subtitle2>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <img src={prof2} alt="professor-avatar" className={classes.image} />
                        <Subtitle2 secondary className={classes.title} >
                            Nom
                </Subtitle2>
                        <Subtitle2 secondary className={classes.title} >
                            Title
                </Subtitle2>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <img src={prof1} alt="professor-avatar" className={classes.image} />
                        <Subtitle2 secondary className={classes.title} >
                            Nom
                </Subtitle2>
                        <Subtitle2 secondary className={classes.title} >
                            Title
                </Subtitle2>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <img src={prof2} alt="professor-avatar" className={classes.image} />
                        <Subtitle2 secondary className={classes.title}>
                            Nom
                </Subtitle2>
                        <Subtitle2 secondary className={classes.title} >
                            Title
                </Subtitle2>
                    </CardContent>
                </Card>
            </div>
            <div className="addProf">
                <div>
                    <h2>Ajouter un nouveau professeur</h2>
                </div>
                <form action="#" method="post">
                    <label >Prenom</label>
                    <input type="text" id="fname" name="fname" value="Entrez un prénom"/>
                    <label>Nom</label>
                    <input type="text" id="lname" name="lname" value="Entrez un nom"/>
                    <label>Adresse mail</label>
                    <input type="email" id="email" name="email" value="Entrez l'adresse mail"/>
                    <label>Adresse mail</label>
                    <input type="email" id="email" name="email" value="Entrez l'adresse mail"/>
                    <label>Adresse mail</label>
                    <input type="email" id="email" name="email" value="Entrez l'adresse mail"/>
                    <label>Adresse mail</label>
                    <input type="email" id="email" name="email" value="Entrez l'adresse mail"/>
                    <label>Numéro de téléphone</label>
                    <input type="number" id="mobile" name="mobile" value="Entrez le numéro de téléphone"/>  
                    <input type="submit" value="Ajouter"/>
                </form>
            </div>
        </div>
    )
};
