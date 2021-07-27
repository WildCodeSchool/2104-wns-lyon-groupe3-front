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
import { UPDATE_USER } from "./Queries"


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
    }
}))

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

    firstNameProf: string,
    setFirstNameProf: any,
    lastNameProf: string,
    setLastNameProf: any,
    titreProf: string,
    setTitreProf: any,
    emailAddress: string,
    setEmailAddress: any,
    phoneNumberProf: string,
    setPhoneNumberProf: any,
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
      firstNameProf
      lastNameProf
      titreProf
      photoProfil
      emailAddress
      phoneNumberProf
      Address{
        street
        postalCode
        town
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
    firstNameProf,
    setFirstNameProf,
    lastNameProf,
    setLastNameProf,
    titreProf,
    setTitreProf,
    phoneNumberProf,
    setPhoneNumberProf,
    emailAddress,
    setEmailAddress,
    street,
    setStreet,
    postalCode,
    setPostalCode,
    town,
    setTown

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

            firstNameProf: { value: string },
            lastNameProf: { value: string },
            titreProf: { value: string },
            phoneNumber: { value: Number },
            emailAddress: { value: string },
            street: { value: string },
            postalCode: { value: string },
            town: { value: string }
        }

        console.log(target.firstNameProf.value);

        if (addButton) {
            setFirstNameProf(target.firstNameProf.value)
            setLastNameProf(target.lastNameProf.value)
            setTitreProf(target.titreProf.value)
            setPhoneNumberProf(target.phoneNumber.value)
            setEmailAddress(target.emailAddress.value)
            setStreet(target.street.value)
            setPostalCode(target.postalCode.value)
            setTown(target.town.value)

            if (target.firstNameProf.value.length === 0) {
                hasError = true
                setErrorFirstNameProf(true)
            } else {
                setErrorFirstNameProf(false)
            }

            if (target.lastNameProf.value.length === 0) {
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

            if ((target.emailAddress.value.length === 0) || (!regex.test(target.emailAddress.value))) {
                hasError = true
                setErrorEmailAddressProf(true)
            } else {
                setErrorEmailAddressProf(false)
            }

            if (target.street.value.length === 0) {
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
        console.log(updateButton);
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

            addToast(`vous avez modifié les informations du professeur : ${firstNameProf} ${lastNameProf}`, {
                appearance: "warning",
                autoDismiss: true
            })

            setFirstNameProf("")
            setLastNameProf("")
            setTitreProf("")
            setPhoneNumberProf(undefined)
            setEmailAddress("")
            setStreet("")
            setPostalCode("")
            setTown("")
            setFileSelected(avatar)
            setUpdateButton(false)

        } else {
            console.log("coucou")
            const result = await createUser(
                {
                    variables: {
                        input: {
                            firstNameProf,
                            lastNameProf,
                            titreProf,
                            photoProfil,
                            emailAddress,
                            phoneNumberProf,
                            Address: {
                                street,
                                postalCode,
                                town,
                            }
                        }
                    }
                }
            );

            addToast(`vous avez ajouté le professeur: ${firstNameProf} ${lastNameProf}`, {
                appearance: "info",
                autoDismiss: true
            })

            setFirstNameProf("")
            setLastNameProf("")
            setTitreProf("")
            setPhoneNumberProf(undefined)
            setEmailAddress("")
            setStreet("")
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
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="firstName" >Prénom du professeur</label>
                                        {
                                            flag ?
                                                <input
                                                    name="firstNameProf"
                                                    id="firstName"
                                                    // placeholder={dataElement.firstName}
                                                    value={firstNameProf ? firstNameProf : dataElement.firstName}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setFirstNameProf(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom" />
                                                :
                                                <input
                                                    name="firstNameProf"
                                                    id="firstName"
                                                    placeholder="Entrez un prénom"
                                                    value={firstNameProf}
                                                    onChange={(e: any) => setFirstNameProf(e.currentTarget.value)}
                                                    className="inputCustom" />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorFirstNameProf && "Prénom obligatoire"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="street">Rue</label>
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
                                            {errorStreetProf && "Nom de rue obligatoire"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="phoneNumber">Numéro de téléphone</label>
                                        {
                                            flag ?
                                                <input
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    placeholder={dataElement.phoneNumber}
                                                    value={phoneNumberProf ? phoneNumberProf : dataElement.phoneNumber}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setPhoneNumberProf(e.currentTarget.value)
                                                    }}
                                                    className="inputCustom"
                                                />
                                                :
                                                <input
                                                    name="phoneNumber"
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
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="lastName" >Nom du professeur</label>
                                        {
                                            flag ?
                                                <input
                                                    name="lastNameProf"
                                                    id="lastName"
                                                    placeholder={dataElement.lastName}
                                                    value={lastNameProf ? lastNameProf : dataElement.lastNameProf}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setLastNameProf(e.currentTarget.value)
                                                    }}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                                :
                                                <input
                                                    name="lastNameProf"
                                                    id="lastName"
                                                    placeholder="Entrez un nom"
                                                    value={lastNameProf}
                                                    onChange={(e: any) => setLastNameProf(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorLastNameProf && "Nom obligatoire"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="postalCode">Code postal</label>
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
                                                    style={{ marginLeft: "0px" }} />
                                                :
                                                <input
                                                    name="postalCode"
                                                    id="postalCode"
                                                    placeholder="Entrez un code postal"
                                                    value={postalCode}
                                                    onChange={(e: any) => setPostalCode(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorPostalCodeProf && "Code postal incorrect"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="emailAddress">Adresse mail</label>
                                        {
                                            flag ?
                                                <input
                                                    name="emailAddress"
                                                    id="emailAddress"
                                                    placeholder={dataElement.emailAddress}
                                                    value={emailAddress ? emailAddress : dataElement.emailAddress}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setEmailAddress(e.currentTarget.value)
                                                    }}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                                :
                                                <input
                                                    name="emailAddress"
                                                    id="emailAddress"
                                                    placeholder="Entrez une adresse mail"
                                                    value={emailAddress}
                                                    onChange={(e: any) => setEmailAddress(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }}
                                                />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorEmailAddressProf && "Email incorrect"}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="titre">Titre</label>
                                        {
                                            flag ?
                                                <input
                                                    name="titreProf"
                                                    id="title"
                                                    placeholder={dataElement.titre}
                                                    value={titreProf ? titreProf : dataElement.titre}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setTitreProf(e.currentTarget.value)
                                                    }
                                                    }
                                                    style={{ marginLeft: "0px" }} />
                                                :
                                                <input
                                                    name="titreProf"
                                                    id="title"
                                                    placeholder="Entrez un titre"
                                                    value={titreProf}
                                                    onChange={(e: any) => setTitreProf(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorTitreProf && "Titre obligatoire"}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label className={classes.labels} htmlFor="town">Ville</label>
                                        {
                                            flag ?
                                                <input
                                                    name="town"
                                                    id="town"
                                                    placeholder={dataElement.Address.town}
                                                    value={town ? town : dataElement.Address.town}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        e.persist()
                                                        setTown(e.currentTarget.value)
                                                    }}
                                                    style={{ marginLeft: "0px" }} />
                                                :
                                                <input
                                                    name="town"
                                                    id="town"
                                                    placeholder="Entrez une ville"
                                                    value={town}
                                                    onChange={(e: any) => setTown(e.currentTarget.value)}
                                                    style={{ marginLeft: "0px" }} />
                                        }
                                        <span className={classes.myErrorMessage}>
                                            {errorTownProf && "Nom de ville obligatoire"}
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
                                    <span>Prénom : <strong>{firstNameProf}</strong></span>
                                    <span>Nom: <strong>{lastNameProf}</strong></span>
                                    <span>Titre : <strong>{titreProf}</strong></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Numéro de téléphone : <strong>{phoneNumberProf}</strong></span>
                                    <span>Adresse mail : <strong>{emailAddress}</strong></span>
                                </div>
                            </div>
                            <h3>Adresse</h3>
                            <div>
                                <span>Rue : <strong>{street}</strong></span>
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