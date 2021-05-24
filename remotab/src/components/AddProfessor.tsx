import React from 'react'
import { makeStyles } from "@material-ui/core"
import '../styles/neumorphism.css'
import { Button, Divider, TextArea, TextField } from 'ui-neumorphism'

const useStyles = makeStyles(theme => ({
    addProfForm: {
        padding: 20,
        margin: 20,
        border: "1px solid #F7F7FF",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column"
    },
    addProf: {
        margin: "10px",
        textTransform: "uppercase",
        fontFamily: "Alef,sans-serif",
        color: theme.palette.primary.contrastText
    },
    formBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
}))

export default function AddProfessor() {
    const classes = useStyles()
    return (
        <div className={classes.addProfForm}>
            <div className={classes.addProf}>
                <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Ajouter un nouveau professeur</h3>
            </div>
            <div>
                <form action="#" method="post" className={classes.formBody}>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label  >Prenom</label>
                            <TextField style={{ marginLeft: "0px" }}
                                placeholder="Entrez un prénom"
                            />
                        </div>
                        <div>
                            <label >Nom</label>
                            <TextField style={{ marginLeft: "0px" }}
                                placeholder="Entrez un nom"
                            />
                        </div>
                        <div>
                            <label >Adresse mail</label>
                            <TextField style={{ marginLeft: "0px" }}
                                placeholder="Entrez une adresse mail"
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label  >Rue</label>
                            <TextField
                                placeholder="Entrez la rue"
                                style={{ marginLeft: "0px" }}
                            />
                        </div>
                        <div>
                            <label >Code postal</label>
                            <TextField
                                placeholder="Entrez un code postal"
                                style={{ marginLeft: "0px" }}
                            />
                        </div>
                        <div>
                            <label >Ville</label>
                            <TextField
                                placeholder="Entrez une ville"
                                style={{ marginLeft: "0px" }}
                            />
                        </div>
                    </div>
                    <div style={{ marginLeft: "35px" }}>
                        <label >Numéro téléphone</label>
                        <TextField
                            placeholder="Entrez un numéro de téléphone"
                            style={{ marginLeft: "0px" }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse", marginRight: "40px" }}>
                        <Button bgColor='#FE5F55' color='#F7F7FF'>
                            Ajouter
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

