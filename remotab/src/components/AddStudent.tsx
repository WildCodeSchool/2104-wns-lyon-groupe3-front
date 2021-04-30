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
        //marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }
}))

function AddStudent() {
    const classes = useStyles()
    return (
        <div className="myAddStudentForm">
            <div className={classes.addProf}>
                <h3>Ajouter un élève</h3>
            </div>
            <div>
                <form action="#" method="post" className={classes.formBody}>
                    <div style={{display:"flex",borderBottom:"1px solid white", justifyContent:"space-around"}}>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label  >Prenom</label>
                            <TextField
                                placeholder="Entrez un prénom"
                            />
                        </div>
                        <div>
                            <label >Nom</label>
                            <TextField
                                placeholder="Entrez un nom"
                            />
                        </div>
                        <div>
                            <label >Adresse mail</label>
                            <TextField
                                placeholder="Entrez une adresse mail"
                            />
                        </div>
                    </div>
                    <h4 style={{margin: "10px"}}>Représentant légal</h4>
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
                        
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label  >Prenom</label>
                            <TextField
                                placeholder="Entrez un prénom"
                            />
                        </div>
                        <div>
                            <label >Nom</label>
                            <TextField
                                placeholder="Entrez un nom"
                            />
                        </div>
                        <div>
                            <label >Adresse mail</label>
                            <TextField
                                placeholder="Entrez une adresse mail"
                            />
                        </div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label  >Rue</label>
                            <TextField
                                placeholder="Entrez la rue"
                                
                            />
                        </div>
                        <div>
                            <label >Code postal</label>
                            <TextField
                                placeholder="Entrez un nom"
                            />
                        </div>
                        <div>
                            <label >Ville</label>
                            <TextField
                                placeholder="Entrez une adresse mail"
                            />
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row-reverse", marginRight:"40px"}}>
                        <Button bgColor='#FE5F55' color='#F7F7FF'>
                            Ajouter
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudent