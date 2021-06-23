import { Card, CardContent, Subtitle2, Button } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import '../styles/neumorphism.css'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logoRemotab.png';
import { ExitToApp } from '@material-ui/icons';
import AddProfessor from '../components/AddProfessor';
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import avatar from "../assets/avatar.jpg";
import { ToastProvider } from 'react-toast-notifications';


const useStyles = makeStyles(theme => ({
    page: {
        background: theme.palette.primary.light,
    },
    logo: {
        width: 250,
    },
    myNav: {
        display: "flex",
        justifyContent: "center",
    },
    myDivExitButton: {
        top: "20px",
        left: "80px",
        height: "50px",
        width: "160px",
        display: "flex",
        position: "absolute",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    exitButton: {
        fontSize: "30px",
        color: theme.palette.secondary.light
    },
    mySpan: {
        fontStyle: "italic",
        color: "#0A2463"
    },
    main: {
        background: theme.palette.primary.dark,
        width: "70vw",
        margin: "150px auto",
        display: "flex",
        flexDirection: "column",
        height: "auto"
    },
    mySearchItem: {
        position: "absolute",
        right: "50px",
        top: "20px",
        color: "orangered"
    },
    profCards: {
        display: 'inline-flex',
        flexWrap: "nowrap",
        overflowX: "scroll",
        padding: 40,
        margin: 20,
        border: "1px solid #F7F7FF",
        borderRadius: "12px",
    },
    card: {
        margin: 15,
        border: 0
    },
    cardContent: {
        display: "flex",
    },
    cardDescription: {
        display: "flex",
        flexDirection: "column"
    },
    cardEmpty: {
        width: 320,
        margin: 15,
    },
    cardEmptyDiv: {
        margin: 10,
        width: "-webkit-fill-available",
        display: "flex",
        justifyContent: "center"
    },
    title: {
        fontSize: 16,
        textAlign: "justify"
    },
    image: {
        marginRight: 10
    },
    detailsButton: {
        marginTop: "10px",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
    },
    addProfForm: {
        padding: 20,
        margin: 20,
        border: "1px solid #F7F7FF",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column"
    },
    addProf: {
        margin: "0 auto",
        textTransform: "uppercase",
        fontFamily: "Alef,sans-serif",
        color: theme.palette.primary.contrastText
    },
    formBody: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column"
    },
    asideContainer: {
        margin: "150px auto",
        display: "flex",
        flexDirection: "column",
        height: "auto"
    },
    asideCards: {
        height: 200,
        margin: 15,
        background: theme.palette.primary.main,
        display: "flex"
    },
    asideCardsContent: {
        font: "Cabin",
        textTransform: "uppercase",
        textAlign: "center",
        background: theme.palette.primary.main,
        color: theme.palette.primary.light,
        alignSelf: "center",
        margin: "10 auto"
    },
    searchBarContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "stretch",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "5px",
        margin: " 15px",
        width: "50%",
        boxShadow: ".3rem .3rem .6rem #c3c3c3, -.2rem -.2rem .5rem #fff"
    },
    searchIcon: {
        position: "absolute",
        display: "flex",
        fill: theme.palette.secondary.light,
        marginRight: " 2px"
    },
    searchInput: {
        padding: "10px",
        width: "100%",
        borderRadius: "10px",
        border: "none",
        marginBottom: "0",
        boxShadow: "inset .2rem .2rem .5rem #c3c3c3, inset -.2rem -.2rem .5rem #fff",
        color: " #c3c3c3",
        outline: "none"
    }
}));


export const ALL_PROFS = gql`
query GetAllProfessors {
  allUsers {
    id
    firstName
    lastName
    titre
    photoProfil
    emailAddress
    phoneNumber
    Address {
      street
      postalCode
      town
    }
  }
}
`;


const initialData = {
    "allUsers": [
        {
            "id": "",
            "firstName": "",
            "lastName": "",
            "titre": "",
            "photoProfil": avatar,
            "emailAddress": "",
            "phoneNumber": "",
            "Address": {
                "street": "",
                "postalCode": "",
                "town": ""
            }
        }
    ]
}

export default function ProfessorForm() {
    const classes = useStyles();

    const [newData, setNewData] = useState([{}]);
    const { loading, error, data, refetch } = useQuery(ALL_PROFS);
    const [dataResult, setDataResult] = useState(initialData);
    const [flag, setFlag] = useState<boolean>(false)
    const [searchData, setSearchData] = useState();
    const [emptySearchData, setEmptySearchData] = useState<boolean>(false);

    // const [filteredProfessors, setFilteredProfessors] = useState([]);

    //Error handling
    const [errorFirstNameProf, setErrorFirstNameProf] = useState<boolean>(false)
    const [errorLastNameProf, setErrorLastNameProf] = useState<boolean>(false)
    const [errorTitreProf, setErrorTitreProf] = useState<boolean>(false)
    const [errorPhotoProfilProf, setErrorPhotoProfileProf] = useState<boolean>(false)
    const [errorEmailAddressProf, setErrorEmailAddressProf] = useState<boolean>(false)
    const [errorPhoneNumberProf, setErrorPhoneNumberProf] = useState<boolean>(false)
    const [errorStreetProf, setErrorStreetProf] = useState<boolean>(false)
    const [errorPostalCodeProf, setErrorPostalCodeProf] = useState<boolean>(false)
    const [errorTownProf, setErrorTownProf] = useState<boolean>(false)

    const [fileSelected, setFileSelected] = useState<File>()

    // const [loadingTest, setLoadingTest] = useState<boolean>(true)

    //Search input
    const handleChange = (event: any): void => {
        const searchedProf = event.value
        setSearchData(searchedProf)

        if (searchedProf) {
            if (data !== undefined) {

                const filteredSearch = data.allUsers.filter((prof: any) =>
                    prof.firstName.toLowerCase().includes(searchedProf.toLowerCase()));


                if (filteredSearch.length === 0) {
                    setEmptySearchData(true)
                }

                else {
                    setDataResult({ allUsers: filteredSearch })
                    setEmptySearchData(false)
                }
            }
        }
        else {
            setDataResult(data)
            setEmptySearchData(false)
        }
    }

    if (loading) {
        return <div data-testid="loading-message">Chargement en cours...</div>
    }

    if (error) {
        return <div data-testid="error-message">Erreur...</div>
    }

    //Details button
    const handleDetails = (id: any) => {
        const filteredData = data.allUsers.filter((elem: any) => elem.id === id)
        setFlag(true)
        setNewData(filteredData)
        setErrorFirstNameProf(false)
        setErrorLastNameProf(false)
        setErrorTitreProf(false)
        setErrorPhotoProfileProf(false)
        setErrorEmailAddressProf(false)
        setErrorPhoneNumberProf(false)
        setErrorStreetProf(false)
        setErrorPostalCodeProf(false)
        setErrorTownProf(false)
        setFileSelected(undefined)
    }

    return (
        data &&
        <div className={classes.page}>
            <div className={classes.myNav}>
                <div className={classes.myDivExitButton}>
                    <span className={classes.mySpan}>Se déconnecter</span>
                    <ExitToApp className={classes.exitButton} />
                </div>

                <img src={logo} alt="logo" className={classes.logo} />
                <button className="toggleButtonNameAdmin">
                    <span className={classes.mySpan}>Nom admin</span>
                </button>

            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Card className={classes.main}>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className={classes.searchBarContainer}>
                            <input type="text" name="search"
                                className={classes.searchInput}
                                placeholder="Recherche professeur par nom..."
                                value={searchData}
                                onChange={handleChange}
                            />
                            <svg className={classes.searchIcon} width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
                        </div>
                    </div>
                    <div className={classes.profCards}>
                        {emptySearchData ?
                            <div className={classes.cardEmptyDiv}>
                                <Card className={classes.cardEmpty}>
                                    <CardContent className={classes.cardContent}>
                                        <Subtitle2 secondary className={classes.title}>Votre recherche n'a donné aucun résultat...</Subtitle2>
                                    </CardContent>
                                </Card>
                            </div> :
                            searchData ?
                                dataResult.allUsers.map((elem: any) =>
                                    <Card className={classes.card}>
                                        <CardContent className={classes.cardContent}>
                                            <img src={elem.photoProfil} alt="professor-avatar" className={classes.image} />
                                            <div className={classes.cardDescription}>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {elem.firstName}
                                                </Subtitle2>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {elem.titre}
                                                </Subtitle2>
                                                <Button className={classes.detailsButton} bordered onClick={() => handleDetails(elem.id)}>Détails</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                                :
                                data.allUsers.map((elem: any) =>
                                    <Card className={classes.card} >
                                        <CardContent className={classes.cardContent}>
                                            <img src={elem.photoProfil} alt="professor-avatar" className={classes.image} />
                                            <div className={classes.cardDescription}>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {elem.lastName}
                                                </Subtitle2>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {elem.titre}
                                                </Subtitle2>
                                                <Button className={classes.detailsButton} bordered onClick={() => handleDetails(elem.id)}>Détails</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                        }
                    </div>
                    <div>
                        <ToastProvider>
                            <AddProfessor 
                                newData={newData}
                                flag={flag}
                                setFlag={setFlag}
                                errorFirstNameProf={errorFirstNameProf}
                                setErrorFirstNameProf={setErrorFirstNameProf}
                                errorLastNameProf={errorLastNameProf}
                                setErrorLastNameProf={setErrorLastNameProf}
                                errorTitreProf={errorTitreProf}
                                setErrorTitreProf={setErrorTitreProf}
                                errorPhotoProfilProf={errorPhotoProfilProf}
                                setErrorPhotoProfileProf={setErrorPhotoProfileProf}
                                errorEmailAddressProf={errorEmailAddressProf}
                                setErrorEmailAddressProf={setErrorEmailAddressProf}
                                errorPhoneNumberProf={errorPhoneNumberProf}
                                setErrorPhoneNumberProf={setErrorPhoneNumberProf}
                                errorStreetProf={errorStreetProf}
                                setErrorStreetProf={setErrorStreetProf}
                                errorPostalCodeProf={errorPostalCodeProf}
                                setErrorPostalCodeProf={setErrorPostalCodeProf}
                                errorTownProf={errorTownProf}
                                setErrorTownProf={setErrorTownProf}
                                fileSelected={fileSelected}
                                setFileSelected={setFileSelected}
                                refetch={refetch}
                            />
                        </ToastProvider>
                    </div>
                </Card>
                <div className={classes.asideContainer}>
                    <Card className={classes.asideCards}>
                        <CardContent className={classes.asideCardsContent}>
                            Gestion des élèves
                        </CardContent>
                    </Card>
                    <Card className={classes.asideCards}>
                        <CardContent className={classes.asideCardsContent}>
                            Gestion des classes
                        </CardContent>
                    </Card>
                    <Card className={classes.asideCards}>
                        <CardContent className={classes.asideCardsContent}>
                            Gestion des messages
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
};
