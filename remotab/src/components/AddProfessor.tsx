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
    labels : {
        color: theme.palette.primary.light
    }
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
                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label className={classes.labels}  >Prenom</label>
                                <TextField style={{ marginLeft: "0px" }}
                                    placeholder="Entrez un prénom"
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label className={classes.labels}   >Rue</label>
                                <TextField
                                    placeholder="Entrez la rue"
                                    style={{ marginLeft: "0px" }}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <label className={classes.labels} >Numéro téléphone</label>
                                <TextField
                                    placeholder="Entrez un numéro de téléphone"
                                    style={{ marginLeft: "0px" }}
                                />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                            <div>
                                <label className={classes.labels} >Nom</label>
                                <TextField style={{ marginLeft: "0px" }}
                                    placeholder="Entrez un nom" />
                            </div>
                            <div>
                                <label className={classes.labels} >Code postal</label>
                                <TextField
                                    placeholder="Entrez un code postal"
                                    style={{ marginLeft: "0px" }}
                                />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                            <div>
                                <label className={classes.labels} >Adresse mail</label>
                                <TextField style={{ marginLeft: "0px" }}
                                    placeholder="Entrez une adresse mail"
                                />
                            </div>
                            <div>
                                <label className={classes.labels} >Ville</label>
                                <TextField
                                    placeholder="Entrez une ville"
                                    style={{ marginLeft: "0px" }}
                                />
                            </div>
                        </div>
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

