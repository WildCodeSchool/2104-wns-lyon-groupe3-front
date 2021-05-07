import React, { useReducer } from 'react'
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core"
import '../styles/neumorphism.css'
import { Button, TextField } from 'ui-neumorphism'
import {useForm} from "react-hook-form"
import { findAllByDisplayValue } from '@testing-library/dom'


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
        justifyContent: "space-around",
        marginTop: "20px"
    },
    addInfoStudent: {
        display: "flex",
        borderBottom: "1px solid white",
        justifyContent: "space-around"
    },
    representTitle: {
        margin: "20px",
        color: theme.palette.primary.contrastText
    },
    addInfoRepresentant: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    addButton: {
        display: "flex",
        flexDirection: "row-reverse",
        marginRight: "40px"
    },
    addBlockInfo: {
        position: "relative"
    },
    myErrorMessage: {
        color: "red",
        fontStyle: "italic",
        position: "absolute",
        left: "12px",
        bottom: "2px",
        fontSize: "13px"
    }
}))

type FormValues = {
    firstNameStudent: string,
    lastNameStudent: string,
    emailStudent: string,

    nameParent: string,
    numberParent: number,
    emailParent: string,

    street: string,
    postalCode: number,
    town: string
}
// const initialString = {
//     returnString: ""
// }

// type State = {
//     returnString: string;
// }

// type Action = {
//     type: "firstNameStudent" | "lastNameStudent"| "nameParent"| "numberParent"| "emailParent"| "street"| "postalCode"| "town";
// }

// function reducer(state:State, action:Action) {
//     switch (action.type) {
//         case 'firstNameStudent':
//             return {returnString: "Prénom obligatoire"};  
//         case 'lastNameStudent':
//             return {returnString: "Nom obligatoire"};
//         case 'nameParent':
//             return {returnString: "Nom obligatoire"};
//         case 'numberParent':
//             return {returnString: "Numéro obligatoire"};
//         case 'emailParent':
//             return {returnString: "Email obligatoire"};
//         case 'street':
//             return {returnString: "Nom de rue obligatoire"};
//         case 'postalCode':
//             return {returnString: "Code postal obligatoire"};
//         case 'town':
//             return {returnString: "Nom de ville obligatoire"};
//       default:
//         return state;
//     }
//   }

function AddStudent() {
    const classes = useStyles()
    //const { formState: { errors }, register } = useForm<FormValues>()
    //const [state, dispatch] = React.useReducer(reducer, initialString)
    const [open, setOpen] = React.useState(false)

    const [errorFirstNameStudent, setErrorFirstNameStudent] = React.useState(false)
    const [errorLastNameStudent, setErrorLastNameStudent] = React.useState(false)
    const [errorEmailStudent, setErrorEmailStudent] = React.useState(false)
    const [errorNameParent, setErrorNameParent] = React.useState(false)
    const [errorNumberParent, setErrorNumberParent] = React.useState(false)
    const [errorEmailParent, setErrorEmailParent] = React.useState(false)
    const [errorStreet, setErrorStreet] = React.useState(false)
    const [errorPostalCode, setErrorPostalCode] = React.useState(false)
    const [errorTown, setErrorTown] = React.useState(false)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let hasError = false
        
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const target = event.target as typeof event.target & {

            firstNameStudent: {value: string},
            lastNameStudent: {value: string},
            emailStudent: {value: string},
        
            nameParent: {value: string},
            numberParent: {value: string},
            emailParent: {value: string},
        
            street: {value: string},
            postalCode: {value: string},
            town: {value: string}
        }

        if (target.firstNameStudent.value.length === 0) {
            hasError = true
            setErrorFirstNameStudent(true)
        } else {
            setErrorFirstNameStudent(false)
        }

        if (target.lastNameStudent.value.length === 0) {
            hasError = true
            setErrorLastNameStudent(true)
        } else {
            setErrorLastNameStudent(false)
        }

        if ((target.emailStudent.value.length === 0) || (!regex.test(target.emailStudent.value))) {
            hasError = true
            setErrorEmailStudent(true)
        } else {
            setErrorEmailStudent(false)
        }

        if (target.nameParent.value.length === 0) {
            hasError = true
            setErrorNameParent(true)
        } else {
            setErrorNameParent(false)
        }

        if ((target.emailParent.value.length === 0) || (!regex.test(target.emailParent.value))) {
            hasError = true
            setErrorEmailParent(true)
        } else {
            setErrorEmailParent(false)
        }

        if ((Number(target.numberParent.value) === 0) || isNaN(Number(target.numberParent.value)) || (target.numberParent.value.length !== 10)) {
            hasError = true
            setErrorNumberParent(true)
        } else {
            setErrorNumberParent(false)
        }

        if (target.street.value.length === 0) {
            hasError = true
            setErrorStreet(true)
        } else {
            setErrorStreet(false)
        }

        if (target.town.value.length === 0) {
            hasError = true
            setErrorTown(true)
        } else {
            setErrorTown(false)
        }

        if ((Number(target.postalCode.value) === 0) || isNaN(Number(target.postalCode.value)) || (target.postalCode.value.length !== 5)) {
            hasError = true
            setErrorPostalCode(true)
        } else {
            setErrorPostalCode(false)
        }

        if (hasError === false) {
            setOpen(true)
        }
    }
    
    return (
        <div className="myAddStudentForm">
            <div className={classes.addProf}>
                <h3>Ajouter un élève</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit} className={classes.formBody}>
                    <div className={classes.addInfoStudent}>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="firstNameStudent" >Prénom de l'élève</label>
                            <TextField
                                //name="firstNameStudent"
                                id="firstNameStudent"
                                placeholder="Entrez un prénom"   
                            />
                            <span className={classes.myErrorMessage} >
                                {errorFirstNameStudent && "Prénom obligatoire"}
                            </span>
                        </div>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="lastNameStudent" >Nom de l'élève</label>
                            <TextField
                                name="lastNameStudent"
                                id="lastNameStudent"
                                placeholder="Entrez un nom"
                            />
                            <span className={classes.myErrorMessage}>
                                {errorLastNameStudent && "Nom obligatoire"}
                            </span>
                        </div>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="emailStudent"  >Adresse mail</label>
                            <TextField
                                name="emailStudent"
                                id="emailStudent"
                                placeholder="Entrez une adresse mail"
                            />
                            <span className={classes.myErrorMessage}>
                                {errorEmailStudent && "Email incorrect"}
                            </span>
                        </div>
                    </div>
                    <h4 className={classes.representTitle}>Représentant légal</h4>
                    <div className={classes.addInfoRepresentant} >                   
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="nameParent" >Nom du représentant</label>
                            <TextField
                                name="nameParent"
                                id="nameParent"
                                placeholder="Entrez un nom"
                            />
                            <span className={classes.myErrorMessage}>
                                {errorNameParent && "Nom obligatoire"}
                            </span>
                        </div>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="numberParent" >Numéro de téléphone</label>
                            <TextField
                                name="numberParent"
                                id="numberParent"
                                placeholder="Entrez un numéro"
                            />
                            <span className={classes.myErrorMessage}>
                                {errorNumberParent && "Numéro incorrect"}
                            </span>
                        </div>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="emailParent" >Adresse mail</label>
                            <TextField
                                name="emailParent"
                                id="emailParent"
                                placeholder="Entrez une adresse mail"
                            />
                            <span className={classes.myErrorMessage}>
                                {errorEmailParent && "Email incorrect"}
                            </span>
                        </div>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="street"  >Rue</label>
                            <TextField
                                name="street"
                                id="street"
                                placeholder="Entrez la rue"
                                
                            />
                            <span className={classes.myErrorMessage}>
                                {errorStreet && "Nom de rue obligatoire"}
                            </span>
                        </div>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="postalCode" >Code postal</label>
                            <TextField
                                name="postalCode"
                                id="postalCode"
                                placeholder="Entrez un code postal"
                            />
                            <span className={classes.myErrorMessage}>
                                {errorPostalCode && "Code postal incorrect"}
                            </span>
                        </div>
                        <div className={classes.addBlockInfo}>
                            <label htmlFor="town" >Ville</label>
                            <TextField
                                name="town"
                                id="town"
                                placeholder="Entrez une adresse ville"
                            />
                            <span className={classes.myErrorMessage}>
                                {errorTown && "Nom de ville obligatoire"}
                            </span>
                        </div>
                    </div>
                    <div className={classes.addButton} >
                        <Button bgColor='#FE5F55' color='#F7F7FF'>
                            Ajouter
                        </Button>
                    </div>
                </form>
            </div>
            <Dialog
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmez votre choix"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    Toutes les informations sont correctes ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    style={{display:"flex", justifyContent:"space-around"}}
                >
                    <button
                        onClick={() => setOpen(false)}
                        style={{background:"#FE5F55",color:"whitesmoke"}}
                        className="validButton"
                    >
                        Non
                    </button>
                    <button
                        onClick={() => {
                        setOpen(false)
                        alert("envoyé")
                        }}
                        color="secondary"
                        className="validButton"
                        style={{color:"#FE5F55"}}
                    >
                        Oui
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddStudent