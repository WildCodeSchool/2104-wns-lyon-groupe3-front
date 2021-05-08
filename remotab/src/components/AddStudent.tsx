import React from 'react'
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
        marginTop: "10px"
    },
    addInfoStudent: {
        display: "flex",
        borderBottom: "1px solid white",
        justifyContent: "space-around"
    },
    representTitle: {
        margin: "10px",
        color: theme.palette.primary.contrastText
    },
    addInfoRepresentant: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "180px"
    },
    addInfoRepresentantBlock: {
        display: "flex",
        //flexDirection: "column",
        justifyContent: "space-around"
    },
    addButton: {
        display: "flex",
        flexDirection: "row-reverse",
        marginRight: "47px",
        marginTop: "7px"
    },
    addButtonDetails: {
        display: "flex",
        justifyContent: "center",
        marginTop: "7px"
    },
    addBlockInfo: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "80px"
    },
    myErrorMessage: {
        color: "red",
        fontStyle: "italic",
        position: "absolute",
        left: "12px",
        bottom: "4px",
        fontSize: "12px"
    }
}))

type FormValues = {
    firstNameStudent: string,
    lastNameStudent: string,
    classStudent: string,

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

type dataProps = {
    newData: any,
    flag: boolean,
    setFlag: any
}

function AddStudent({newData, flag, setFlag}:dataProps) {
    const classes = useStyles()
    //const { formState: { errors }, register } = useForm<FormValues>()
    //const [state, dispatch] = React.useReducer(reducer, initialString)
    const [open, setOpen] = React.useState(false)

    const [errorFirstNameStudent, setErrorFirstNameStudent] = React.useState(false)
    const [errorLastNameStudent, setErrorLastNameStudent] = React.useState(false)
    const [errorClassStudent, setErrorClassStudent] = React.useState(false)
    const [errorNameParent, setErrorNameParent] = React.useState(false)
    const [errorNumberParent, setErrorNumberParent] = React.useState(false)
    const [errorEmailParent, setErrorEmailParent] = React.useState(false)
    const [errorStreet, setErrorStreet] = React.useState(false)
    const [errorPostalCode, setErrorPostalCode] = React.useState(false)
    const [errorTown, setErrorTown] = React.useState(false)

    const [firstNameStudent, setFirstNameStudent] = React.useState("")

    console.log(firstNameStudent)
    console.log(flag)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let hasError = false
        
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const target = event.target as typeof event.target & {

            firstNameStudent: {value: string},
            lastNameStudent: {value: string},
            classStudent: {value: string},
        
            nameParent: {value: string},
            numberParent: {value: string},
            emailParent: {value: string},
        
            street: {value: string},
            postalCode: {value: string},
            town: {value: string}
        }

        console.log(target.firstNameStudent.value)

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

        if (target.classStudent.value.length === 0)  {
            hasError = true
            setErrorClassStudent(true)
        } else {
            setErrorClassStudent(false)
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
                {
                    flag ?
                        <span>Fiche de renseignement de <strong>{newData.map((element:any) => element.lastNameStudent) }</strong></span>
                        :
                        <h3>Ajouter un élève</h3>
                }
                
            </div>
            <div>
                {
                    newData.map((dataElement:any) => 
                        <form
                            onSubmit={handleSubmit}
                            className={classes.formBody}
                        >
                            <div className={classes.addInfoStudent}>
                                <div className={classes.addBlockInfo}>
                                    <label htmlFor="firstNameStudent" >Prénom de l'élève</label>
                                    {
                                        flag ?
                                            <input
                                                name="firstNameStudent"
                                                id="firstNameStudent"
                                                value={dataElement.firstNameStudent}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="firstNameStudent"
                                                id="firstNameStudent"
                                                placeholder="Entrez un prénom"
                                                value=""
                                                className="inputCustom"
                                            />
                                    }
                                    <span className={classes.myErrorMessage} >
                                        {errorFirstNameStudent && "Prénom obligatoire"}
                                    </span>
                                </div>
                                <div className={classes.addBlockInfo}>
                                    <label htmlFor="lastNameStudent" >Nom de l'élève</label>
                                    {
                                        flag ?
                                            <input
                                                name="lastNameStudent"
                                                id="lastNameStudent"
                                                value={dataElement.lastNameStudent}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="lastNameStudent"
                                                id="lastNameStudent"
                                                placeholder="Entrez un nom"
                                                className="inputCustom"
                                            />
                                    }
                                    <span className={classes.myErrorMessage}>
                                        {errorLastNameStudent && "Nom obligatoire"}
                                    </span>
                                </div>
                                <div className={classes.addBlockInfo}>
                                    <label htmlFor="classStudent"  >Classe</label>
                                    {
                                        flag ?
                                            <input
                                                name="classStudent"
                                                id="classStudent"
                                                value={dataElement.classStudent}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="classStudent"
                                                id="classStudent"
                                                placeholder="Entrez la classe"
                                                className="inputCustom"
                                            />
                                    }
                                    <span className={classes.myErrorMessage}>
                                        {errorClassStudent && "Classe obligatoire"}
                                    </span>
                                </div>
                            </div>
                            <h4 className={classes.representTitle}>Représentant légal</h4>
                            <div className={classes.addInfoRepresentant} >
                                <div className={classes.addInfoRepresentantBlock}>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="nameParent" >Nom du représentant</label>
                                        {
                                            flag ?
                                                <input
                                                    name="nameParent"
                                                    id="nameParent"
                                                    value={dataElement.nameParent}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="nameParent"
                                                    id="nameParent"
                                                    placeholder="Entrez la nom"
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorNameParent && "Nom obligatoire"}
                                        </span>
                                    </div>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="numberParent" >Numéro de téléphone</label>
                                        {
                                            flag ?
                                                <input
                                                    name="numberParent"
                                                    id="numberParent"
                                                    value={dataElement.numberParent}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="numberParent"
                                                    id="numberParent"
                                                    placeholder="Entrez un numéro"
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorNumberParent && "Numéro incorrect"}
                                        </span>
                                    </div>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="emailParent" >Adresse mail</label>
                                        {
                                            flag ?
                                                <input
                                                    name="emailParent"
                                                    id="emailParent"
                                                    value={dataElement.emailParent}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="emailParent"
                                                    id="emailParent"
                                                    placeholder="Entrez une adresse mail"
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorEmailParent && "Email incorrect"}
                                        </span>
                                    </div>
                                </div>
                                <div className={classes.addInfoRepresentantBlock}>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="street"  >Rue</label>
                                        {
                                            flag ?
                                                <input
                                                    name="street"
                                                    id="street"
                                                    value={dataElement.street}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="street"
                                                    id="street"
                                                    placeholder="Entrez la rue"
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorStreet && "Nom de rue obligatoire"}
                                        </span>
                                    </div>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="postalCode" >Code postal</label>
                                        {
                                            flag ?
                                                <input
                                                    name="postalCode"
                                                    id="postalCode"
                                                    value={dataElement.postalCode}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="postalCode"
                                                    id="postalCode"
                                                    placeholder="Entrez un code postal"
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorPostalCode && "Code postal incorrect"}
                                        </span>
                                    </div>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="town" >Ville</label>
                                        {
                                            flag ?
                                                <input
                                                    name="town"
                                                    id="town"
                                                    value={dataElement.town}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="town"
                                                    id="town"
                                                    placeholder="Entrez une ville"
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorTown && "Nom de ville obligatoire"}
                                        </span>
                                    </div>
                                </div>


                            </div>
                            {
                                flag ?
                                    <div className={classes.addButtonDetails} >
                                        <Button
                                            bgColor='#FE5F55'
                                            color='#F7F7FF'
                                            style={{height:"25px",margin:"5px"}}
                                            onClick={()=>setFlag(false)}
                                        >
                                            Ajouter un nouvel élève
                                        </Button>
                                        <Button
                                            bgColor='#FE5F55'
                                            color='#F7F7FF'
                                            style={{height:"25px",margin:"5px"}}
                                        >
                                            Enrégistrer les modifications
                                        </Button>
                                        <Button
                                            bgColor='#FE5F55'
                                            color='#F7F7FF'
                                            style={{height:"25px",margin:"5px"}}
                                        >
                                            Supprimer l'élève
                                        </Button>
                                    </div>
                                    :
                                    <div className={classes.addButton} >
                                        <Button bgColor='#FE5F55' color='#F7F7FF'>
                                            Ajouter
                                        </Button>
                                    </div>
                            }

                        </form>
                    )
                }
        
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