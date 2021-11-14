import '../styles/neumorphism.css';

import { ALL_USERS, CREATE_PROF, UPDATE_PROF } from "../utils/Queries";
import { Avatar, Button } from 'ui-neumorphism'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, } from "@material-ui/core";

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Buttons from './Buttons';
import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react';
import defaultImage from '../assets/defaultImage.png';
import { useMutation } from '@apollo/client';
import { useToasts } from 'react-toast-notifications';

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
    changeProfil: {
        position: "absolute",
        top: "5px",
        left: "5px"
    },
    addProfil: {
        position: "absolute",
        top: "35px",
        right: "-7px",
        color: "red",

        "&:hover": {
            cursor: "pointer"
        }
    },
    addProfilInput: {
        position: "absolute",
        top: "35px",
        left: 0,


    }
}))

type FormValues = {
    firstname: string,
    lastname: string,
    class: Number,

    nameParent: string,
    numberParent: number,
    email: string,

    street: string,
    postalCode: number,
    city: string
}

type dataProps = {
    newData: any,
    flag: boolean,
    setFlag: any,

    errorfirstname: boolean,
    setErrorfirstname: any
    errorlastname: boolean,
    setErrorlastname: any,
    errorClassStudent: boolean,
    setErrorClassStudent: any,
    errorNameParent: boolean,
    setErrorNameParent: any,
    errorNumberParent: boolean,
    setErrorNumberParent: any,
    erroremail: boolean,
    setErroremail: any,
    errorStreet: boolean,
    setErrorStreet: any,
    errorPostalCode: boolean,
    setErrorPostalCode: any,
    errorcity: boolean,
    setErrorcity: any,
    fileSelected: any,
    setFileSelected: any,

    firstname: string,
    setfirstname: any,
    lastname: string,
    setlastname: any,
    classStu: string,
    setClassStu: any,
    nameParent: string,
    setNameParent: any,
    numberParent: string,
    setNumberParent: any,
    email: string,
    setemail: any,
    street: string,
    setStreet: any,
    postalCode: string,
    setPostalCode: any,
    city: string,
    setcity: any,
    role: any,
    setRole: any,
    refetch: any
}


function AddStudent({
    newData,
    flag,
    setFlag,

    errorfirstname,
    setErrorfirstname,
    errorlastname,
    setErrorlastname,
    errorClassStudent,
    setErrorClassStudent,
    errorNameParent,
    setErrorNameParent,
    errorNumberParent,
    setErrorNumberParent,
    erroremail,
    setErroremail,
    errorStreet,
    setErrorStreet,
    errorPostalCode,
    setErrorPostalCode,
    errorcity,
    setErrorcity,

    fileSelected,
    setFileSelected,
    firstname,
    setfirstname,
    lastname,
    setlastname,
    classStu,
    setClassStu,
    nameParent,
    setNameParent,
    numberParent,
    setNumberParent,
    email,
    setemail,
    street,
    setStreet,
    postalCode,
    setPostalCode,
    city,
    setcity,

    role,
    setRole,
    refetch

}: dataProps) {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [modalUpdate, setModalUpdate] = React.useState(false)
    const [idUpdate, setIdUpdate] = React.useState("")

    const [deleteButton, setDeleteButton] = React.useState(false)
    const [addButton, setAddButton] = React.useState(false)
    const [updateButton, setUpdateButton] = React.useState(false)

    const { addToast } = useToasts()

    const [profil, setProfil] = React.useState<File>()

    const [createUser, { data }] = useMutation(CREATE_PROF,
    )

    console.log(profil)
    const [updateUser] = useMutation(UPDATE_PROF)

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let hasError = false

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const target = event.target as typeof event.target & {

            firstname: { value: string },
            lastname: { value: string },
            classStu: { value: Number },

            nameParent: { value: string },
            numberParent: { value: string },
            email: { value: string },

            street: { value: string },
            postalCode: { value: string },
            city: { value: string }
        }

        if (addButton) {
            setfirstname(target.firstname.value)
            setlastname(target.lastname.value)
            setClassStu(target.classStu.value)
            setNameParent(target.nameParent.value)
            setNumberParent(target.numberParent.value)
            setemail(target.email.value)
            setStreet(target.street.value)
            setPostalCode(target.postalCode.value)
            setcity(target.city.value)

            if (target.firstname.value.length === 0) {
                hasError = true
                setErrorfirstname(true)
            } else {
                setErrorfirstname(false)
            }

            if (target.lastname.value.length === 0) {
                hasError = true
                setErrorlastname(true)
            } else {
                setErrorlastname(false)
            }

            if ((Number(target.classStu.value) === 0) || isNaN(Number(target.classStu.value))) {
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

            if ((target.email.value.length === 0) || (!regex.test(target.email.value))) {
                hasError = true
                setErroremail(true)
            } else {
                setErroremail(false)
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

            if (target.city.value.length === 0) {
                hasError = true
                setErrorcity(true)
            } else {
                setErrorcity(false)
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
            setAddButton(false)
        }

    }

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        console.log("profil", profil)

        const fileList = e.target.files;

        if (!fileList) return;

        setFileSelected(fileList[0]);

        if (fileSelected) {
            const formData = new FormData();
            formData.append("image", fileSelected, fileSelected.name);
        }

        console.log(fileList, fileSelected)

    }

    const handleSend = async () => {
        setOpen(false)
        setFlag(false)

        const picture = fileSelected instanceof File ? URL.createObjectURL(fileSelected) : defaultImage
        const classStudent = Number(classStu)
        const isActive = "ACTIVE"
        const birthday = "01/01/1994"


        if (updateButton) {
            const id = idUpdate
            console.log(id)
            try {
                await updateUser(
                    {
                        variables: {
                            id,
                            firstname,
                            lastname,
                            email,
                            address: {
                                street,
                                postalCode,
                                city
                            },
                            role,
                            isActive,
                            birthday,
                            picture
                        }
                    }
                );

                addToast(`vous avez modifié les informations de l'élève : ${firstname} ${lastname}`, {
                    appearance: "warning",
                    autoDismiss: true
                })

                setfirstname("")
                setlastname("")
                setClassStu("")
                setNameParent("")
                setNumberParent("")
                setemail("")
                setStreet("")
                setPostalCode("")
                setcity("")
                setFileSelected()
                setUpdateButton(false)
                setProfil(undefined)

            } catch (error) {
                console.log(error)
            }



        } else {

            try {

                await createUser(
                    {
                        variables: {

                            firstname,
                            lastname,
                            email,
                            addressInput: {
                                street,
                                postalCode,
                                city,
                            },
                            role,
                            isActive,
                            birthday,
                            picture


                        }
                    }
                );

                addToast(`vous avez ajouté l'élève: ${firstname} ${lastname}`, {
                    appearance: "info",
                    autoDismiss: true
                })

                refetch()

                setfirstname("")
                setlastname("")
                setClassStu("")
                setNameParent("")
                setNumberParent("")
                setemail("")
                setStreet("")
                setPostalCode("")
                setcity("")
                setFileSelected()
                setProfil(undefined)


            } catch (error) {
                console.log(error)
                addToast(`l'adresse mail : ${email} est déjà utilisée`, {
                    appearance: "error",
                    autoDismiss: false
                })
            }

        }

    }

    return (
        <div className="myAddStudentForm">
            {
                flag ?
                    <div className={classes.changeProfil}>
                        <Avatar
                            src={newData.map((img: any) => img.picture)}
                            alt="profil-avatar"
                            size={50}
                        />
                        <label htmlFor="imageProfil">
                            <input
                                type="file"
                                accept="image/*"
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
                            fileSelected instanceof File ?
                                <Avatar
                                    src={URL.createObjectURL(fileSelected)}
                                    alt="profil-avatar"
                                    size={50}
                                />
                                :
                                <Avatar
                                    src={defaultImage}
                                    alt="profil-avatar"
                                    size={50}
                                />
                        }

                        <label htmlFor="imageProfil">
                            <input
                                type="file"
                                accept="image/*"
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
                        <span>Fiche de renseignement de <strong>{newData.map((element: any) => element.lastname)}</strong></span>
                        :
                        <h3>Ajouter un élève</h3>
                }

            </div>
            {
                flag &&
                <CancelIcon
                    className="cancelButton"
                    onClick={() => setFlag(false)}
                />
            }
            <div>
                {
                    newData.map((dataElement: any) =>
                        <form
                            onSubmit={handleSubmit}
                            className={classes.formBody}
                        >
                            <div className={classes.addInfoStudent}>
                                <div className={classes.addBlockInfo}>
                                    <label htmlFor="firstname" >Prénom de l'élève</label>
                                    {
                                        flag ?
                                            <input
                                                name="firstname"
                                                id="firstname"
                                                value={firstname ? firstname : dataElement.firstname}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    e.persist()
                                                    setfirstname(e.currentTarget.value)
                                                }}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="firstname"
                                                id="firstname"
                                                placeholder="Entrez un prénom"
                                                value={firstname}
                                                onChange={(e) => setfirstname(e.currentTarget.value)}
                                                className="inputCustom"
                                            />
                                    }
                                    <span className={classes.myErrorMessage} >
                                        {errorfirstname && "Prénom obligatoire"}
                                    </span>
                                </div>
                                <div className={classes.addBlockInfo}>
                                    <label htmlFor="lastname" >Nom de l'élève</label>
                                    {
                                        flag ?
                                            <input
                                                name="lastname"
                                                id="lastname"
                                                value={lastname ? lastname : dataElement.lastname}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    e.persist()
                                                    setlastname(e.currentTarget.value)
                                                }}
                                                className="inputCustom"
                                            />
                                            :
                                            <input
                                                name="lastname"
                                                id="lastname"
                                                placeholder="Entrez un nom"
                                                value={lastname}
                                                onChange={(e) => setlastname(e.currentTarget.value)}
                                                className="inputCustom"
                                            />
                                    }
                                    <span className={classes.myErrorMessage}>
                                        {errorlastname && "Nom obligatoire"}
                                    </span>
                                </div>
                                <div className={classes.addBlockInfo}>
                                    <label htmlFor="class"  >Classe</label>
                                    {
                                        flag ?
                                            <input
                                                name="classStu"
                                                id="classStu"
                                                value={classStu ? classStu : dataElement.classStudent}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                                                value={classStu}
                                                onChange={(e) => setClassStu(Number(e.currentTarget.value))}
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
                                                    value={nameParent ? nameParent : dataElement.nameParent}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setNameParent(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="nameParent"
                                                    id="nameParent"
                                                    placeholder="Entrez le nom"
                                                    value={nameParent}
                                                    onChange={(e) => setNameParent(e.currentTarget.value)}
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
                                                    value={numberParent ? numberParent : dataElement.numberParent}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                                                    onChange={(e) => setNumberParent(e.currentTarget.value)}
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorNumberParent && "Numéro incorrect"}
                                        </span>
                                    </div>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="email" >email</label>
                                        {
                                            flag ?
                                                <input
                                                    name="email"
                                                    id="email"
                                                    value={email ? email : dataElement.email}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setemail(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="email"
                                                    id="email"
                                                    placeholder="Entrez l'email"
                                                    value={email}
                                                    onChange={(e) => setemail(e.currentTarget.value)}
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {erroremail && "Email incorrect"}
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
                                                    value={street ? street : dataElement.address.street}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                                                    onChange={(e) => setStreet(e.currentTarget.value)}
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
                                                    value={postalCode ? postalCode : dataElement.address.postalCode}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                                                    onChange={(e) => setPostalCode(e.currentTarget.value)}
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorPostalCode && "Code postal incorrect"}
                                        </span>
                                    </div>
                                    <div className={classes.addBlockInfo}>
                                        <label htmlFor="city" >Ville</label>
                                        {
                                            flag ?
                                                <input
                                                    name="city"
                                                    id="city"
                                                    value={city ? city : dataElement.address.city}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setcity(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="city"
                                                    id="city"
                                                    placeholder="Entrez une ville"
                                                    value={city}
                                                    onChange={(e) => setcity(e.currentTarget.value)}
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorcity && "Nom de ville obligatoire"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {
                                flag ?
                                    <div className={classes.addButtonDetails} >
                                        <Buttons
                                            dataElement={dataElement._id}
                                            setFlag={setFlag}
                                            setAddButton={setAddButton}
                                            setUpdateButton={setUpdateButton}
                                            setIdUpdate={setIdUpdate}
                                            refetch={refetch}
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
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Toutes les informations sont correctes ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className={classes.dialogContent} >
                            <Avatar
                                src={fileSelected instanceof File ? URL.createObjectURL(fileSelected) : defaultImage}
                                size={120}
                                style={{ alignSelf: "center" }}
                            />

                            <div className={classes.categoryInfo} >
                                <h3 className={classes.titleContent} >Elève</h3>
                                <div className={classes.divInfo} >
                                    <span>Prénom de l'élève : <strong>{firstname}</strong></span>
                                    <span>Nom de l'élève : <strong>{lastname}</strong></span>
                                    <span>Classe de l'élève : <strong>{classStu}</strong></span>
                                </div>
                            </div>
                            <div className={classes.categoryInfo} >
                                <h3 className={classes.titleContent} >Représentant</h3>
                                <div className={classes.divInfo} >
                                    <span>Nom du représentant : <strong>{nameParent}</strong></span>
                                    <span>Numéro de téléphone : <strong>{numberParent}</strong></span>
                                    <span>email du représentant : <strong>{email}</strong></span>
                                </div>
                            </div>
                            <div className={classes.categoryInfo}>
                                <h3 className={classes.titleContent} >Adresse postale</h3>
                                <div className={classes.divInfo}>
                                    <span>Rue : <strong>{street}</strong></span>
                                    <span>Code postal : <strong>{postalCode}</strong></span>
                                    <span>Ville : <strong>{city}</strong></span>
                                </div>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <button
                        onClick={() => setOpen(false)}
                        style={{ background: "#FE5F55", color: "whitesmoke" }}
                        className="validButton"
                    >
                        Non
                    </button>
                    <button
                        onClick={handleSend}
                        color="secondary"
                        className="validButton"
                        style={{ color: "#FE5F55" }}
                    >
                        Oui
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddStudent