import React from 'react'
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@material-ui/core"
import CancelIcon from '@material-ui/icons/Cancel'
import '../styles/neumorphism.css'
import { Avatar, Button, TextField } from 'ui-neumorphism'


import defaultImage from '../assets/defaultImage.png'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import Buttons from './Buttons'
import { useToasts } from 'react-toast-notifications'
import merge from 'ts-deepmerge'

import {UPDATE_USER, ALL_USERS} from "./Queries"

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
    class: Number,

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

//const CREATE

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
    setFileSelected: any,
    
    firstNameStudent: string,
    setFirstNameStudent: any,
    lastNameStudent: string,
    setLastNameStudent: any,
    classStu: string,
    setClassStu: any,
    nameParent: string,
    setNameParent: any,
    numberParent: string,
    setNumberParent: any,
    emailParent: string,
    setEmailParent: any,
    street: string,
    setStreet: any,
    postalCode: string,
    setPostalCode: any,
    town: string,
    setTown: any
}

const CREATE_USER = gql`

mutation CreateUser($input: InputUser!){
    createUser(inputUser: $input){
      id
      firstNameStudent
      lastNameStudent
      classStudent
      photoProfil
      nameParent
      numberParent
      emailParent
      Adress{
        id
        street
        postalCode
        town
      }
    }
  }
`;

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
    setFileSelected,
    firstNameStudent,
    setFirstNameStudent,
    lastNameStudent,
    setLastNameStudent,
    classStu,
    setClassStu,
    nameParent,
    setNameParent,
    numberParent,
    setNumberParent,
    emailParent,
    setEmailParent,
    street,
    setStreet,
    postalCode,
    setPostalCode,
    town,
    setTown

}: dataProps) {

    const classes = useStyles()
    //const { formState: { errors }, register } = useForm<FormValues>()
    //const [state, dispatch] = React.useReducer(reducer, initialString)
    const [open, setOpen] = React.useState(false)
    const [modalUpdate, setModalUpdate] = React.useState(false)
    const [idUpdate, setIdUpdate] = React.useState("")

    const [deleteButton, setDeleteButton] = React.useState(false)
    const [addButton, setAddButton] = React.useState(false)
    const [updateButton, setUpdateButton] = React.useState(false)

    const {addToast} = useToasts()

    const profil = fileSelected || ""

    const [createUser, { data }] = useMutation(CREATE_USER,
        // {
        // refetchQueries: [
        //     {query: ALL_USERS}
        // ]
        // }
    )

    const [updateUserInfo] = useMutation(UPDATE_USER)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let hasError = false
        
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const target = event.target as typeof event.target & {

            firstNameStudent: {value: string},
            lastNameStudent: {value: string},
            classStu: {value: Number},
        
            nameParent: {value: string},
            numberParent: {value: string},
            emailParent: {value: string},
        
            street: {value: string},
            postalCode: {value: string},
            town: {value: string}
        }

        if (addButton) {
            setFirstNameStudent(target.firstNameStudent.value)
            setLastNameStudent(target.lastNameStudent.value)
            setClassStu(target.classStu.value)
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
    
            if ((Number(target.classStu.value) === 0) || isNaN(Number(target.classStu.value)))  {
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
                // if (updateButton) {
                //     setModalUpdate(true)
                //     setUpdateButton(false)
                // } else {
                    setOpen(true)
                //}  
            }
            setAddButton(false)
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
        
        //  if (fileSelected) {
        //      const formData = new FormData();
        //      formData.append("image", fileSelected, fileSelected.name);
        //  }
    }

    const handleSend = async() => {
        setOpen(false)
        setFlag(false)
       // alert("envoyé")
        const photoProfil = profil instanceof URL ? URL.createObjectURL(profil) : defaultImage
        const classStudent = Number(classStu)
        

        if (updateButton) {

            const result = await updateUserInfo(
                 {
                     variables: {
                            id: idUpdate
                     }
                 }
            );

            addToast(`vous avez modifié les informations de l'élève : ${firstNameStudent} ${lastNameStudent}`, {
                appearance: "warning",
                autoDismiss: true
            })

            setFirstNameStudent("")
            setLastNameStudent("")
            setClassStu("")
            setNameParent("")
            setNumberParent("")
            setEmailParent("")
            setStreet("")
            setPostalCode("")
            setTown("")
            setFileSelected(defaultImage)
            setUpdateButton(false)

        }else {
            const result = await createUser(
                {
                    variables: {
                        input: {
                            firstNameStudent,
                            lastNameStudent,
                            classStudent,
                            photoProfil,
                            nameParent,
                            numberParent,
                            emailParent,
                            Adress: {
                                street,
                                postalCode,
                                town,
                            }
                        }
    
                    }
                }
            );
                
            addToast(`vous avez ajouté l'élève: ${firstNameStudent} ${lastNameStudent}`, {
                appearance: "info",
                autoDismiss: true
            })
    
            setFirstNameStudent("")
            setLastNameStudent("")
            //setClassStu(undefined)
            setNameParent("")
            setNumberParent("")
            setEmailParent("")
            setStreet("")
            setPostalCode("")
            setTown("")
            setFileSelected(defaultImage)
        }

    }
    
    return (
        <div className="myAddStudentForm">
            {
                flag ?
                    <div className={classes.changeProfil}>
                        <Avatar
                            src={

                                    newData.map((img: any) => img.photoProfil)
                            }
                            alt="profil-avatar"
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
                            profil instanceof File ?
                                <Avatar
                                    src={URL.createObjectURL(profil)}
                                    alt="profil-avatar"
                                    className={classes.profilEleve}
                                    size={50}
                                />
                                :
                                <Avatar
                                    src={defaultImage}
                                    alt="profil-avatar"
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
                                                //placeholder={dataElement.firstNameStudent}
                                                value={firstNameStudent ? firstNameStudent : dataElement.firstNameStudent }
                                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                    e.persist()
                                                    setFirstNameStudent(e.currentTarget.value)
                                                }}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="firstNameStudent"
                                                id="firstNameStudent"
                                                placeholder="Entrez un prénom"
                                                value={lastNameStudent}
                                                onChange={(e)=>setFirstNameStudent(e.currentTarget.value)}
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
                                                //placeholder={dataElement.lastNameStudent}
                                                value={lastNameStudent ? lastNameStudent : dataElement.lastNameStudent }
                                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                    e.persist()
                                                    setLastNameStudent(e.currentTarget.value)
                                                }}
                                                className="inputCustom"
                                            />
                                            : 
                                            <input
                                                name="lastNameStudent"
                                                id="lastNameStudent"
                                                placeholder="Entrez un nom"
                                                value={lastNameStudent}
                                                onChange={(e)=>setLastNameStudent(e.currentTarget.value)}
                                                className="inputCustom"
                                            />
                                    }
                                    <span className={classes.myErrorMessage}>
                                        {errorLastNameStudent && "Nom obligatoire"}
                                    </span>
                                </div>
                                <div className={classes.addBlockInfo}>
                                    <label htmlFor="class"  >Classe</label>
                                    {
                                        flag ?
                                            <input
                                                name="classStu"
                                                id="classStu"
                                                //placeholder={dataElement.classStudent}
                                                value={classStu ? classStu : dataElement.classStudent }
                                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                    e.persist()
                                                    setClassStu(e.currentTarget.value)
                                                }}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="classStu"
                                                id="classStu"
                                                placeholder="Entrez la classe"
                                                //value={Number(classStu)}
                                                onChange={(e)=>setClassStu(Number(e.currentTarget.value))}
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
                                                    //placeholder={dataElement.nameParent}
                                                    value={nameParent ? nameParent : dataElement.nameParent}
                                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setNameParent(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="nameParent"
                                                    id="nameParent"
                                                    placeholder="Entrez la nom"
                                                    value={nameParent}
                                                    onChange={(e)=>setNameParent(e.currentTarget.value)}
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
                                                    //placeholder={dataElement.numberParent}
                                                    value={numberParent ? numberParent : dataElement.numberParent}
                                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setNumberParent(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="numberParent"
                                                    id="numberParent"
                                                    placeholder="Entrez un numéro"
                                                    value={numberParent}
                                                    onChange={(e)=>setNumberParent(e.currentTarget.value)}
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
                                                    //placeholder={dataElement.emailParent}
                                                    value={emailParent ? emailParent : dataElement.emailParent}
                                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setEmailParent(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="emailParent"
                                                    id="emailParent"
                                                    placeholder="Entrez une adresse mail"
                                                    value={emailParent}
                                                    onChange={(e)=>setEmailParent(e.currentTarget.value)}
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
                                                   // placeholder={dataElement.Adress.street}
                                                    value={street ? street : dataElement.Adress.street}
                                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setStreet(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="street"
                                                    id="street"
                                                    placeholder="Entrez la rue"
                                                    value={street}
                                                    onChange={(e)=>setStreet(e.currentTarget.value)}
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
                                                   // placeholder={dataElement.Adress.postalCode}
                                                    value={postalCode ? postalCode : dataElement.Adress.postalCode}
                                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setPostalCode(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="postalCode"
                                                    id="postalCode"
                                                    placeholder="Entrez un code postal"
                                                    value={postalCode}
                                                    onChange={(e)=>setPostalCode(e.currentTarget.value)}
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
                                                    //placeholder={dataElement.Adress.town}
                                                    value={town ? town : dataElement.Adress.town}
                                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setTown(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="town"
                                                    id="town"
                                                    placeholder="Entrez une ville"
                                                    value={town}
                                                    onChange={(e)=>setTown(e.currentTarget.value)}
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
                                        <Buttons
                                            dataElement={dataElement.id}
                                            setFlag={setFlag}
                                            setAddButton={setAddButton}
                                            setUpdateButton={setUpdateButton}
                                            setIdUpdate={setIdUpdate}
                                        />
                                    </div>
                                    :
                                    <div className={classes.addButton} >
                                        <Button
                                            bgColor='#FE5F55'
                                            color='#F7F7FF'
                                            onClick={() => {
                                                setAddButton(true)
                                            }
                                            }
                                        >
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
                                profil instanceof File ?
                                    <Avatar
                                        src={URL.createObjectURL(profil)}
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
                                    <span>Classe de l'élève : <strong>{classStu}</strong></span>                                   
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
                        onClick={handleSend}
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