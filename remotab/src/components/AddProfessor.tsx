import React from 'react';
import '../styles/neumorphism.css';
import { makeStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import { Button, Avatar } from 'ui-neumorphism';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CancelIcon from '@material-ui/icons/Cancel';
import avatar from '../assets/avatar.jpg';
import gql from "graphql-tag";
import { useState } from "react";
import { useToasts } from 'react-toast-notifications';
import { useMutation } from '@apollo/client';
import Buttons from './Buttons';
import { UPDATE_USER, ALL_PROFS, CREATE_USER } from "./Queries"


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
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    formBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    labels: {
        color: theme.palette.primary.light,
        position: "absolute",
        marginLeft: "20px"
    },
    avatarImage: {
        width: "100px",
        borderRadius: "50%",
        position: "absolute",
        color: "rgb(254, 95, 85)"
    },
    addPhoto: {
        position: "absolute",
        marginLeft: "-25px",
        marginTop: "10px"
    },
    myErrorMessage: {
        color: "red",
        fontStyle: "italic",
        position: "absolute",
        left: "12px",
        bottom: "4px",
        fontSize: "12px"
    },
    inputBlocks: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px"
    }
}))

type dataProps = {
    newData: any,
    flag: boolean,
    setFlag: any,
    errorFirstname: boolean,
    setErrorFirstname: any,
    errorLastname: boolean,
    setErrorLastname: any,
    errorRole: boolean,
    setErrorRole: any,
    errorEmail: boolean,
    setErrorEmail: any,
    errorPhoneNumberProf: boolean,
    setErrorPhoneNumberProf: any,
    errorStreet: boolean,
    setErrorStreet: any,
    errorPostalCode: boolean,
    setErrorPostalCode: any,
    errorCity: boolean,
    setErrorCity: any,
    fileSelected: any,
    setFileSelected: any,
    refetch: any,

    firstname: string,
    setFirstname: any,
    lastname: string,
    setLastname: any,
    role: string,
    setRole: any,
    email: string,
    setEmail: any,
    phoneNumberProf: string,
    setPhoneNumberProf: any,
    street: string,
    setStreet: any,
    postalCode: string,
    setPostalCode: any,
    city: string,
    setCity: any
}

export default function AddProfessor({
    newData,
    flag,
    setFlag,
    errorFirstname,
    setErrorFirstname,
    errorLastname,
    setErrorLastname,
    errorRole,
    setErrorRole,
    errorEmail,
    setErrorEmail,
    errorPhoneNumberProf,
    setErrorPhoneNumberProf,
    errorStreet,
    setErrorStreet,
    errorPostalCode,
    setErrorPostalCode,
    errorCity,
    setErrorCity,
    fileSelected,
    setFileSelected,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    role,
    setRole,
    phoneNumberProf,
    setPhoneNumberProf,
    email,
    setEmail,
    street,
    setStreet,
    postalCode,
    setPostalCode,
    city,
    setCity,
    refetch

}: dataProps) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [idUpdate, setIdUpdate] = useState("") 

    const [addButton, setAddButton] = useState(false)
    const [updateButton, setUpdateButton] = useState(false)

    const { addToast } = useToasts()

    const profil = fileSelected || ""

    const [createUser, { data }] = useMutation(CREATE_USER)
    const [updateUserInfo] = useMutation(UPDATE_USER);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let hasError = false


        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const target = event.target as typeof event.target & {

            firstname: { value: string },
            lastname: { value: string },
            role: { value: string },
            phoneNumberProf: { value: Number },
            email: { value: string },
            street: { value: string },
            postalCode: { value: string },
            city: { value: string }
        }

        if (addButton) {
            setFirstname(target.firstname.value)
            setLastname(target.lastname.value)
            setRole(target.role.value)
            setPhoneNumberProf(target.phoneNumberProf.value)
            setEmail(target.email.value)
            setStreet(target.street.value)
            setPostalCode(target.postalCode.value)
            setCity(target.city.value)

            if (target.firstname.value.length === 0) {
                hasError = true
                setErrorFirstname(true)
            } else {
                setErrorFirstname(false)
            }

            if (target.lastname.value.length === 0) {
                hasError = true
                setErrorLastname(true)
            } else {
                setErrorLastname(false)
            }

            if (target.role.value.length === 0) {
                hasError = true
                setErrorRole(true)
            } else {
                setErrorRole(false)
            }

            if ((Number(target.phoneNumberProf.value) === 0) || isNaN(Number(target.phoneNumberProf.value))) {
                hasError = true
                setErrorPhoneNumberProf(true)
            } else {
                setErrorPhoneNumberProf(false)
            }

            if ((target.email.value.length === 0) || (!regex.test(target.email.value))) {
                hasError = true
                setErrorEmail(true)
            } else {
                setErrorEmail(false)
            }

            if (target.street.value.length === 0) {
                hasError = true
                setErrorStreet(true)
            } else {
                setErrorStreet(false)
            }

            if (target.city.value.length === 0) {
                hasError = true
                setErrorCity(true)
            } else {
                setErrorCity(false)
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

        const fileList = e.target.files;

        if (fileList) {
            setFileSelected(fileList[0])
        }
    }

    const handleSend = async () => {
        setOpen(false)
        setFlag(false)
        const photoProfil = profil instanceof URL ? URL.createObjectURL(profil) : avatar
        if (updateButton) {

            const result = await updateUserInfo(
                {
                    variables: {
                        id: idUpdate
                    }
                }
            );

            addToast(`vous avez modifié les informations du professeur : ${firstname} ${lastname}`, {
                appearance: "warning",
                autoDismiss: true
            })

            setFirstname("")
            setLastname("")
            setRole("")
            setPhoneNumberProf(undefined)
            setEmail("")
            setStreet("")
            setPostalCode("")
            setCity("")
            setFileSelected(avatar)
            setUpdateButton(false)

        } else {
            const result = await createUser(
                {
                    variables: {
                        input: {
                            firstname,
                            lastname,
                            role,
                            email,
                            phoneNumberProf,
                            Address: {
                                street,
                                postalCode,
                                city,
                            }
                        }
                    }
                }
            );

            addToast(`vous avez ajouté le professeur: ${firstname} ${lastname}`, {
                appearance: "info",
                autoDismiss: true
            })

            setFirstname("")
            setLastname("")
            setRole("")
            setPhoneNumberProf(undefined)
            setEmail("")
            setStreet("")
            setPostalCode("")
            setCity("")
            setFileSelected(avatar)
        }
    }
    return (
        <div className={classes.addProfForm}>
            {
                flag ?
                    <div>
                        <Avatar
                            src={
                                newData.map((img: any) => img.photoProfil)
                            }
                            alt="profil-avatar"
                            size={100}
                            className={classes.avatarImage}
                        />
                        <input
                            type="file"
                            accept="image/jpeg,image/jpg,image/PNG,application/pdf"
                            hidden
                            onChange={handleChangeImage}
                            name="imageProfil"
                            id="imageProfil"
                        />
                        <AddAPhotoIcon
                            fontSize="small"
                            className={classes.avatarImage}
                        />
                    </div>
                    :
                    <div className={classes.inputBlocks}>
                        {
                            profil instanceof File ?
                                <Avatar
                                    src={URL.createObjectURL(profil)}
                                    alt="profil-avatar"
                                    size={100}
                                    className={classes.avatarImage}
                                />
                                :
                                <Avatar
                                    src={avatar}
                                    alt="profil-avatar"
                                    size={100}
                                    className={classes.avatarImage}
                                />
                        }

                        <input
                            type="file"
                            accept="image/jpeg,image/jpg,image/PNG,application/pdf"
                            hidden
                            onChange={handleChangeImage}
                            name="imageProfil"
                            id="imageProfil"
                        />
                        <AddAPhotoIcon
                            fontSize="small"
                            className={classes.avatarImage}
                        />
                    </div>
            }

            <div className={classes.addProf}>
                {
                    flag ?
                        <span>Fiche de renseignement de <strong>{newData.map((element: any) => element.lastName)}</strong></span>
                        :
                        <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Ajouter un nouveau professeur</h3>
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
                        <form onSubmit={handleSubmit} className={classes.formBody}>
                            <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "100px" }}>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="firstname"
                                                    id="firstName"
                                                    placeholder={dataElement.firstname}
                                                    value={firstname ? firstname : dataElement.firstname}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setFirstname(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom" />
                                                :
                                                <input
                                                    name="firstname"
                                                    id="firstName"
                                                    placeholder="Entrez un prénom"
                                                    value={firstname}
                                                    onChange={(e: any) => setFirstname(e.currentTarget.value)}
                                                    className="inputCustom" />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorFirstname && "Prénom obligatoire"}
                                        </span>
                                    </div>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="street"
                                                    id="street"
                                                    placeholder={dataElement.Address.street}
                                                    value={street ? street : dataElement.Address.street}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setStreet(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom" />
                                                :
                                                <input
                                                    name="street"
                                                    id="street"
                                                    placeholder="Entrez la rue"
                                                    value={street}
                                                    onChange={(e: any) => setStreet(e.currentTarget.value)}
                                                    className="inputCustom" />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorStreet && "Nom de rue obligatoire"}
                                        </span>
                                    </div>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="phoneNumberProf"
                                                    id="phoneNumber"
                                                    placeholder={dataElement.phoneNumberProf}
                                                    value={phoneNumberProf ? phoneNumberProf : dataElement.phoneNumberProf}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setPhoneNumberProf(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="phoneNumberProf"
                                                    id="phoneNumber"
                                                    value={phoneNumberProf}
                                                    placeholder="Entrez le numéro de téléphone"
                                                    onChange={(e: any) => setPhoneNumberProf(Number(e.currentTarget.value))}
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorPhoneNumberProf && "Numéro de téléphone obligatoire"}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="lastname"
                                                    id="lastName"
                                                    placeholder={dataElement.lastName}
                                                    value={lastname ? lastname : dataElement.lastname}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setLastname(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom" />
                                                :
                                                <input
                                                    name="lastname"
                                                    id="lastName"
                                                    placeholder="Entrez un nom"
                                                    value={lastname}
                                                    onChange={(e: any) => setLastname(e.currentTarget.value)}
                                                    className="inputCustom" />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorLastname && "Nom obligatoire"}
                                        </span>
                                    </div>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="postalCode"
                                                    id="postalCode"
                                                    placeholder={dataElement.Address.postalCode}
                                                    value={postalCode ? postalCode : dataElement.Address.postalCode}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setPostalCode(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom" />
                                                :
                                                <input
                                                    name="postalCode"
                                                    id="postalCode"
                                                    placeholder="Entrez un code postal"
                                                    value={postalCode}
                                                    onChange={(e: any) => setPostalCode(e.currentTarget.value)}
                                                    className="inputCustom" />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorPostalCode && "Code postal incorrect"}
                                        </span>
                                    </div>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="email"
                                                    id="email"
                                                    placeholder={dataElement.email}
                                                    value={email ? email : dataElement.email}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setEmail(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="email"
                                                    id="email"
                                                    placeholder="Entrez une adresse mail"
                                                    value={email}
                                                    onChange={(e: any) => setEmail(e.currentTarget.value)}
                                                    className="inputCustom"
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorEmail && "Email incorrect"}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="role"
                                                    id="title"
                                                    placeholder={dataElement.role}
                                                    value={role ? role : dataElement.role}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setRole(e.currentTarget.value)
                                                    }
                                                    }
                                                    className="inputCustom" />
                                                :
                                                <input
                                                    name="role"
                                                    id="title"
                                                    placeholder="Entrez un titre"
                                                    value={role}
                                                    onChange={(e: any) => setRole(e.currentTarget.value)}
                                                    className="inputCustom" />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorRole && "Titre obligatoire"}
                                        </span>
                                    </div>
                                    <div className={classes.inputBlocks}>
                                        {
                                            flag ?
                                                <input
                                                    name="city"
                                                    id="city"
                                                    placeholder={dataElement.Address.city}
                                                    value={city ? city : dataElement.Address.city}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setCity(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom" />
                                                :
                                                <input
                                                    name="city"
                                                    id="city"
                                                    placeholder="Entrez une ville"
                                                    value={city}
                                                    onChange={(e: any) => setCity(e.currentTarget.value)}
                                                    className="inputCustom" />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorCity && "Nom de ville obligatoire"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {
                                flag ?
                                    <div style={{ display: "inline-flex", justifyContent: "space-around", marginTop: "30px", marginBottom: "30px" }}>
                                        <Buttons
                                            dataElement={dataElement.id}
                                            setFlag={setFlag}
                                            setAddButton={setAddButton}
                                            setUpdateButton={setUpdateButton}
                                            setIdUpdate={setIdUpdate}
                                            refetch={refetch}
                                        />
                                    </div>
                                    :
                                    <div style={{ display: "flex", flexDirection: "row-reverse", marginRight: "20px", marginTop: "30px" }}>
                                        <Button
                                            bgColor='#FE5F55' color='#F7F7FF'
                                            onClick={() => setAddButton(true)}
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
                        <div>
                            {
                                profil instanceof File ?
                                    <Avatar
                                        src={URL.createObjectURL(profil)}
                                        size={120}
                                        style={{ alignSelf: "center" }}
                                    />
                                    :
                                    <Avatar
                                        src={avatar}
                                        size={120}
                                        style={{ alignSelf: "center" }}
                                    />
                            }

                            <div>
                                <h3>Professeur</h3>
                                <div>
                                    <span>Prénom : <strong>{firstname}</strong></span>
                                    <span>Nom: <strong>{lastname}</strong></span>
                                    <span>Titre : <strong>{role}</strong></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Numéro de téléphone : <strong>{phoneNumberProf}</strong></span>
                                    <span>Adresse mail : <strong>{email}</strong></span>
                                </div>
                            </div>
                            <h3>Adresse</h3>
                            <div>
                                <span>Rue : <strong>{street}</strong></span>
                                <span>Code postal : <strong>{postalCode}</strong></span>
                                <span>Ville : <strong>{city}</strong></span>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "row-reverse", marginRight: "40px" }}>
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
                    </div>
                </DialogActions>
            </Dialog>
        </div >
    )
}