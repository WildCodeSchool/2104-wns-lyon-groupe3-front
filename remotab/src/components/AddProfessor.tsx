import React from 'react';
import '../styles/neumorphism.css';
import { makeStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import { Button, TextField, Avatar } from 'ui-neumorphism';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CancelIcon from '@material-ui/icons/Cancel';
import avatar from '../assets/avatar.jpg';
import gql from "graphql-tag";
import { useState } from "react";
import { useToasts } from 'react-toast-notifications';
import { useMutation } from '@apollo/client';
import Buttons from './Buttons';
import merge from 'ts-deepmerge';
import {UPDATE_USER, ALL_PROFS} from "./Queries"


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
        color: theme.palette.primary.light
    },
    avatarImage: {
        width: "100px",
        borderRadius: "50%",
        position: "relative"
    },
    addPhoto: {
        position: "absolute",
        marginLeft: "-25px",
        marginTop: "10px"
    }
}))

type ProfFormValues = {
    firstName: string,
    lastName: string,
    titre: string,
    emailAddress: string,
    phoneNumber: number,
    street: string,
    postalCode: number,
    town: string
}

type dataProps = {
    newData: any,
    flag: boolean,
    setFlag: any,
    errorFirstNameProf: boolean,
    setErrorFirstNameProf: any,
    errorLastNameProf: boolean,
    setErrorLastNameProf: any,
    errorTitreProf: boolean,
    setErrorTitreProf: any,
    errorEmailAddressProf: boolean,
    setErrorEmailAddressProf: any,
    errorPhoneNumberProf: boolean,
    setErrorPhoneNumberProf: any,
    errorStreetProf: boolean,
    setErrorStreetProf: any,
    errorPostalCodeProf: boolean,
    setErrorPostalCodeProf: any,
    errorTownProf: boolean,
    setErrorTownProf: any,
    fileSelected: any,
    setFileSelected: any,
    refetch: any,

    firstName: string,
    setFirstName: any,
    lastName: string,
    setLastName: any,
    titreProf: string,
    setTitreProf: any,
    emailProf: string,
    setEmailProf: any,
    phoneNumber: string,
    setPhoneNumber: any,
    streetProf: string,
    setStreetProf: any,
    postalCode: string,
    setPostalCode: any,
    town: string,
    setTown: any
}

const CREATE_USER = gql`
mutation CreateUser($input: InputUser!){
    createUser(inputUser: $input){
      id
      firstNameProf
      lastNameProf
      titreProfilProf
      photoProfil
      emailAddressProf
      phoneNumberProf
      Address{
        streetProf
        postalCodeProf
        townProf
      }
    }
  }
`;


export default function AddProfessor({
    newData,
    flag,
    setFlag,
    errorFirstNameProf,
    setErrorFirstNameProf,
    errorLastNameProf,
    setErrorLastNameProf,
    errorTitreProf,
    setErrorTitreProf,
    errorEmailAddressProf,
    setErrorEmailAddressProf,
    errorPhoneNumberProf,
    setErrorPhoneNumberProf,
    errorStreetProf,
    setErrorStreetProf,
    errorPostalCodeProf,
    setErrorPostalCodeProf,
    errorTownProf,
    setErrorTownProf,
    fileSelected,
    setFileSelected,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    titreProf,
    setTitreProf,
    phoneNumber,
    setPhoneNumber,
    emailProf,
    setEmailProf,
    streetProf,
    setStreetProf,
    postalCode,
    setPostalCode,
    town,
    setTown

}: dataProps) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    const [idUpdate, setIdUpdate] = useState("")

    const [deleteButton, setDeleteButton] = useState(false)
    const [addButton, setAddButton] = useState(false)
    const [updateButton, setUpdateButton] = useState(false)

    const { addToast } = useToasts()

    const profil = fileSelected || ""

    const [createUser, { data }] = useMutation(CREATE_USER, {
        refetchQueries: [
            { query: ALL_PROFS }
        ]
    })
    const [updateUserInfo] = useMutation(UPDATE_USER);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let hasError = false

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        const target = event.target as typeof event.target & {

            firstName: { value: string },
            lastName: { value: string },
            titreProf: { value: string },
            phoneNumber: { value: Number },
            emailProf: { value: string },
            streetProf: { value: string },
            postalCode: { value: string },
            town: { value: string }
        }

        if (addButton) {
            setFirstName(target.firstName.value)
            setLastName(target.lastName.value)
            setTitreProf(target.titreProf.value)
            setPhoneNumber(target.phoneNumber.value)
            setEmailProf(target.emailProf.value)
            setStreetProf(target.streetProf.value)
            setPostalCode(target.postalCode.value)
            setTown(target.town.value)

            if (target.firstName.value.length === 0) {
                hasError = true
                setErrorFirstNameProf(true)
            } else {
                setErrorFirstNameProf(false)
            }

            if (target.lastName.value.length === 0) {
                hasError = true
                setErrorLastNameProf(true)
            } else {
                setErrorLastNameProf(false)
            }

            if (target.titreProf.value.length === 0) {
                hasError = true
                setErrorTitreProf(true)
            } else {
                setErrorTitreProf(false)
            }

            if ((Number(target.phoneNumber.value) === 0) || isNaN(Number(target.phoneNumber.value))) {
                hasError = true
                setErrorPhoneNumberProf(true)
            } else {
                setErrorPhoneNumberProf(false)
            }

            if ((target.emailProf.value.length === 0) || (!regex.test(target.emailProf.value))) {
                hasError = true
                setErrorEmailAddressProf(true)
            } else {
                setErrorEmailAddressProf(false)
            }

            if (target.streetProf.value.length === 0) {
                hasError = true
                setErrorStreetProf(true)
            } else {
                setErrorStreetProf(false)
            }

            if (target.town.value.length === 0) {
                hasError = true
                setErrorTownProf(true)
            } else {
                setErrorTownProf(false)
            }

            if ((Number(target.postalCode.value) === 0) || isNaN(Number(target.postalCode.value)) || (target.postalCode.value.length !== 5)) {
                hasError = true
                setErrorPostalCodeProf(true)
            } else {
                setErrorPostalCodeProf(false)
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
        const phoneNumberProf = Number(phoneNumber)
        if (updateButton) {

            const result = await updateUserInfo(
                {
                    variables: {
                        id: idUpdate
                    }
                }
            );

            addToast(`vous avez modifié les informations du professeur : ${firstName} ${lastName}`, {
                appearance: "warning",
                autoDismiss: true
            })

            setFirstName("")
            setLastName("")
            setTitreProf("")
            setPhoneNumber(undefined)
            setEmailProf("")
            setStreetProf("")
            setPostalCode("")
            setTown("")
            setFileSelected(avatar)
            setUpdateButton(false)

        } else {
            const result = await createUser(
                {
                    variables: {
                        input: {
                            firstName,
                            lastName,
                            titreProf,
                            photoProfil,
                            phoneNumberProf,
                            emailProf,
                            Address: {
                                streetProf,
                                postalCode,
                                town,
                            }
                        }

                    }
                }
            );

            addToast(`vous avez ajouté le professeur: ${firstName} ${lastName}`, {
                appearance: "info",
                autoDismiss: true
            })

            setFirstName("")
            setLastName("")
            setTitreProf("")
            setPhoneNumber(undefined)
            setEmailProf("")
            setStreetProf("")
            setPostalCode("")
            setTown("")
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
                                fileSelected ?
                                    URL.createObjectURL(profil)
                                    :
                                    newData.map((img: any) => img.photoProfil)
                            }
                            alt="profil-avatar"
                            size={100}
                            className={classes.avatarImage}
                        />
                        <label className={classes.labels} htmlFor="imageProfil">
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
                        </label>

                    </div>
                    :
                    <div style={{ display: "flex", flexDirection: "column" }}>
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

                        <label className={classes.labels} htmlFor="imageProfil">
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
                        </label>
                    </div>
            }

            <div className={classes.addProf}>
                {
                    flag ?
                        <span>Fiche de renseignement de <strong>{newData.map((element: any) => element.lastName)}</strong></span>
                        :
                        <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Ajouter un nouveau professeur</h3>
                }
                {
                    flag &&
                    <CancelIcon
                        className="cancelButton"
                        onClick={() => setFlag(false)}
                    />
                }
            </div>
            <div>
                {
                    newData.map((dataElement: any) =>
                        <form onSubmit={handleSubmit} className={classes.formBody}>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="firstName" >Prénom du professeur</label>
                                        {
                                            flag ?
                                                <TextField
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder={dataElement.firstName}
                                                    onChange={(e: any) => setFirstName(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                                :
                                                <TextField
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder="Entrez un prénom"
                                                    value={lastName}
                                                    onChange={(e: any) => setFirstName(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                        }
                                        <span>
                                            {errorFirstNameProf && "Prénom obligatoire"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="street">Rue</label>
                                        {
                                            flag ?
                                                <TextField
                                                    name="street"
                                                    id="street"
                                                    placeholder={dataElement.Address.street}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                                :
                                                <TextField
                                                    name="street"
                                                    id="street"
                                                    placeholder="Entrez la rue"
                                                    value={streetProf}
                                                    onChange={(e: any) => setStreetProf(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                        }
                                        <span>
                                            {errorStreetProf && "Nom de rue obligatoire"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="phoneNumber"  >Numéro de téléphone</label>
                                        {
                                            flag ?
                                                <TextField
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    placeholder={dataElement.phoneNumber}
                                                    onChange={(e: any) => setPhoneNumber(Number(e.currentTarget.value))}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                                :
                                                <TextField
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    placeholder="Entrez le numéro de téléphone"
                                                    onChange={(e: any) => setPhoneNumber(Number(e.currentTarget.value))}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                        }
                                        <span>
                                            {errorPhoneNumberProf && "Numéro de téléphone obligatoire"}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="lastName" >Nom du professeur</label>
                                        {
                                            flag ?
                                                <TextField
                                                    name="lastName"
                                                    id="lastName"
                                                    placeholder={dataElement.lastName}
                                                    onChange={(e: any) => setLastName(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                                :
                                                <TextField
                                                    name="lastName"
                                                    id="lastName"
                                                    placeholder="Entrez un nom"
                                                    value={lastName}
                                                    onChange={(e: any) => setLastName(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                        }
                                        <span>
                                            {errorLastNameProf && "Nom obligatoire"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="emailProf">Adresse mail</label>
                                        {
                                            flag ?
                                                <TextField
                                                    name="emailProf"
                                                    id="emailProf"
                                                    placeholder={dataElement.emailAddress}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                                :
                                                <TextField
                                                    name="emailProf"
                                                    id="emailProf"
                                                    placeholder="Entrez une adresse mail"
                                                    value={emailProf}
                                                    onChange={(e: any) => setEmailProf(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                        }
                                        <span>
                                            {errorEmailAddressProf && "Email incorrect"}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="postalCode" >Code postal</label>
                                        {
                                            flag ?
                                                <TextField
                                                    name="postalCode"
                                                    id="postalCode"
                                                    placeholder={dataElement.Address.postalCode}
                                                    style={{ marginLeft: "0px" }} />
                                                :
                                                <TextField
                                                    name="postalCode"
                                                    id="postalCode"
                                                    placeholder="Entrez un code postal"
                                                    value={postalCode}
                                                    onChange={(e: any) => setPostalCode(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                        }
                                        <span >
                                            {errorPostalCodeProf && "Code postal incorrect"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="town">Ville</label>
                                        {
                                            flag ?
                                                <TextField
                                                    name="town"
                                                    id="town"
                                                    placeholder={dataElement.Address.town}
                                                    style={{ marginLeft: "0px" }} />
                                                :
                                                <TextField
                                                    name="town"
                                                    id="town"
                                                    placeholder="Entrez une ville"
                                                    value={town}
                                                    onChange={(e: any) => setTown(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                        }
                                        <span>
                                            {errorTownProf && "Nom de ville obligatoire"}
                                        </span>
                                    </div>
                                    {
                                        flag ?
                                            <div style={{ display: "flex", flexDirection: "row-reverse", marginRight: "40px" }}>
                                                <Buttons
                                                    dataElement={dataElement.id}
                                                    setFlag={setFlag}
                                                    setAddButton={setAddButton}
                                                    setUpdateButton={setUpdateButton}
                                                    setIdUpdate={setIdUpdate}
                                                />
                                            </div>
                                            :
                                            <div style={{ display: "flex", flexDirection: "row-reverse", marginRight: "40px" }}>
                                                <Button
                                                    bgColor='#FE5F55' color='#F7F7FF'
                                                    onClick={() => setAddButton(true)}
                                                >
                                                    Ajouter
                                                </Button>
                                            </div>
                                    }
                                </div>
                            </div>
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
                                        className={classes.avatarImage}
                                    />
                                    :
                                    <Avatar
                                        src={avatar}
                                        size={120}
                                        style={{ alignSelf: "center" }}
                                        className={classes.avatarImage}
                                    />
                            }

                            <div>
                                <h3>Professeur</h3>
                                <div>
                                    <span>Prénom : <strong>{firstName}</strong></span>
                                    <span>Nom: <strong>{lastName}</strong></span>
                                    <span>Titre : <strong>{titreProf}</strong></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Numéro de téléphone : <strong>{phoneNumber}</strong></span>
                                    <span>Adresse mail : <strong>{emailProf}</strong></span>
                                </div>
                            </div>
                            <h3>Adresse</h3>
                            <div>
                                <span>Rue : <strong>{streetProf}</strong></span>
                                <span>Code postal : <strong>{postalCode}</strong></span>
                                <span>Ville : <strong>{town}</strong></span>
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