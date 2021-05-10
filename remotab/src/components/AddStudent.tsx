import React from 'react'
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core"
import CancelIcon from '@material-ui/icons/Cancel'
import '../styles/neumorphism.css'
import { Avatar, Button, TextField } from 'ui-neumorphism'

import { cloneDeep } from "lodash"

import defaultImage from '../assets/defaultImage.png'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'


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
    },
    dialogContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "500px"
    },
    categoryInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    titleContent: {
        color: "#0A2463",
        marginBottom: "10px"
    },
    divInfo: {
        display: "flex",
        flexDirection: "column"
    },
    profilEleve: {
       // width: "100px"
    },
    changeProfil: {
        position: "absolute",
        top: "5px",
        left:"5px"
    },
    addProfil: {
        position:"absolute",
        top: "35px",
        right: "-7px",
        color: "red",

        "&:hover": {
            cursor: "pointer"
        }
    },
    addProfilInput: {
        position:"absolute",
        top: "35px",
        left: 0,


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
    setFlag: any,
    errorFirstNameStudent: boolean,
    setErrorFirstNameStudent: any
    errorLastNameStudent:boolean,
    setErrorLastNameStudent:any,
    errorClassStudent:boolean,
    setErrorClassStudent:any,
    errorNameParent:boolean,
    setErrorNameParent:any,
    errorNumberParent:boolean,
    setErrorNumberParent:any,
    errorEmailParent:boolean,
    setErrorEmailParent:any,
    errorStreet:boolean,
    setErrorStreet:any,
    errorPostalCode:boolean,
    setErrorPostalCode:any,
    errorTown:boolean,
    setErrorTown: any,
    fileSelected:any,
    setFileSelected:any
}

function AddStudent({
    newData,
    flag,
    setFlag,
    errorFirstNameStudent,
    setErrorFirstNameStudent,
    errorLastNameStudent,
    setErrorLastNameStudent,
    errorClassStudent,
    setErrorClassStudent,
    errorNameParent,
    setErrorNameParent,
    errorNumberParent,
    setErrorNumberParent,
    errorEmailParent,
    setErrorEmailParent,
    errorStreet,
    setErrorStreet,
    errorPostalCode,
    setErrorPostalCode,
    errorTown,
    setErrorTown,
    fileSelected,
    setFileSelected
}: dataProps) {
    const classes = useStyles()
    //const { formState: { errors }, register } = useForm<FormValues>()
    //const [state, dispatch] = React.useReducer(reducer, initialString)
    const [open, setOpen] = React.useState(false)

    const [firstNameStudent, setFirstNameStudent] = React.useState("")
    const [lastNameStudent, setLastNameStudent] = React.useState("")
    const [classStudent, setClassStudent] = React.useState("")
    const [nameParent, setNameParent] = React.useState("")
    const [numberParent, setNumberParent] = React.useState("")
    const [emailParent, setEmailParent] = React.useState("")
    const [street, setStreet] = React.useState("")
    const [postalCode, setPostalCode] = React.useState("")
    const [town, setTown] = React.useState("")

    const recipe = fileSelected || ""

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

        setFirstNameStudent(target.firstNameStudent.value)
        setLastNameStudent(target.lastNameStudent.value)
        setClassStudent(target.classStudent.value)
        setNameParent(target.nameParent.value)
        setNumberParent(target.numberParent.value)
        setEmailParent(target.emailParent.value)
        setStreet(target.street.value)
        setPostalCode(target.postalCode.value)
        setTown(target.town.value)

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

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()

        const fileList = e.target.files;
    
        if (fileList) {
            console.log("la fileList :", fileList)
            setFileSelected(fileList[0])

            console.log("fileSelected:", fileSelected)
        }
        
        if (fileSelected) {
            const formData = new FormData();
            formData.append("image", fileSelected, fileSelected.name);
        }
    }
    
    return (
        <div className="myAddStudentForm">
            {
                flag ?
                    <div className={classes.changeProfil}>
                        <Avatar
                            src={
                                fileSelected ?
                                    URL.createObjectURL(recipe)
                                    :
                                    newData.map((img: any) => img.image)
                            }
                            className={classes.profilEleve}
                            size={50}
                        />
                        <label htmlFor="imageProfil">
                            <input
                                //style={{background: "black", height: 20, width: 20}}
                                type="file"
                                accept="image/jpeg,image/jpg,image/PNG,application/pdf"
                                hidden
                                onChange={handleChangeImage}
                                name="imageProfil"
                                id="imageProfil"
                                className={classes.addProfilInput}
                            />
                            <AddAPhotoIcon
                                fontSize="small"
                                className={classes.addProfil}
                            />
                        </label>

                    </div>
                    :
                    <div className={classes.changeProfil}>
                        {
                            recipe instanceof File ?
                                <Avatar
                                    src={URL.createObjectURL(recipe)}
                                    className={classes.profilEleve}
                                    size={50}
                                />
                                :
                                <Avatar
                                    src={defaultImage}
                                    className={classes.profilEleve}
                                    size={50}
                                />
                        }

                        <label htmlFor="imageProfil">
                            <input
                                //style={{background: "black", height: 20, width: 20}}
                                type="file"
                                accept="image/jpeg,image/jpg,image/PNG,application/pdf"
                                hidden
                                onChange={handleChangeImage}
                                name="imageProfil"
                                id="imageProfil"
                                className={classes.addProfilInput}
                            />
                            <AddAPhotoIcon
                                fontSize="small"
                                className={classes.addProfil}
                            />
                        </label>
                    </div>
            }
            
            <div className={classes.addProf}>
                {
                    flag ?
                        <span>Fiche de renseignement de <strong>{newData.map((element:any) => element.lastNameStudent) }</strong></span>
                        :
                        <h3>Ajouter un élève</h3>
                }
                
            </div>
            {
                flag &&
                <CancelIcon
                    className="cancelButton"
                    onClick={()=>setFlag(false)}
                />
            }
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
                                                placeholder={dataElement.firstNameStudent}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="firstNameStudent"
                                                id="firstNameStudent"
                                                placeholder="Entrez un prénom"
                                                //value=""
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
                                                placeholder={dataElement.lastNameStudent}
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
                                                placeholder={dataElement.classStudent}
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
                                                    placeholder={dataElement.nameParent}
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
                                                    placeholder={dataElement.numberParent}
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
                                                    placeholder={dataElement.emailParent}
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
                                                    placeholder={dataElement.street}
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
                                                    placeholder={dataElement.postalCode}
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
                                                    placeholder={dataElement.town}
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
                    {"Toutes les informations sont correctes ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className={classes.dialogContent} >
                            {
                                recipe instanceof File ?
                                    <Avatar
                                        src={URL.createObjectURL(recipe)}
                                        size={120}
                                        style={{alignSelf:"center"}}
                                    />
                                    :
                                    <Avatar
                                        src={defaultImage}
                                        size={120}
                                        style={{alignSelf:"center"}}
                                    />
                            }
                            
                            <div className={classes.categoryInfo} >
                                <h3 className={classes.titleContent} >Elève</h3>
                                <div className={classes.divInfo} >
                                    <span>Prénom de l'élève : <strong>{firstNameStudent}</strong></span>
                                    <span>Nom de l'élève : <strong>{lastNameStudent}</strong></span>
                                    <span>Classe de l'élève : <strong>{classStudent}</strong></span>                                   
                                </div>
                            </div>
                            <div className={classes.categoryInfo} >
                                <h3 className={classes.titleContent} >Représentant</h3>
                                <div className={classes.divInfo} >
                                    <span>Nom du représentant : <strong>{nameParent}</strong></span>
                                    <span>Numéro de téléphone : <strong>{numberParent}</strong></span>
                                    <span>Adresse mail du représentant : <strong>{emailParent}</strong></span>
                                </div>
                            </div>
                            <div className={classes.categoryInfo}>
                                <h3 className={classes.titleContent} >Adresse</h3>
                                <div className={classes.divInfo}>
                                    <span>Rue : <strong>{street}</strong></span>
                                    <span>Code postal : <strong>{postalCode}</strong></span>
                                    <span>Ville : <strong>{ town}</strong></span>
                                </div>
                            </div>
                        </div>
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
                            setFlag(false)
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