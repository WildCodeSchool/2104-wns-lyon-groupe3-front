import { Card, CardContent, Subtitle2, Button, Badge } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import '../styles/neumorphism.css';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/logoRemotab.png';
import { ExitToApp } from '@material-ui/icons';
import AddProfessor from '../components/AddProfessor';
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import avatar from "../assets/avatar.jpg";
import { ToastProvider } from 'react-toast-notifications';
import { PROF } from '../components/Queries';
import shortid from 'shortid';


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
        marginRight: 10,
        width: 70
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
    },
}));

const initialData = {
    "getUsersByRole": [
        {
            "_id": "",
            "firstname": "",
            "lastname": "",
            "addressInput": {
                "street": "",
                "postalCode": "",
                "city": ""
            },
            "role": "",
            "isActive": "",
            "picture": avatar,
        }
    ]
}


export default function ProfessorForm() {
    const classes = useStyles();

    const { loading, error, data, refetch } = useQuery(PROF, { variables: { role: 'TEACHER' } });
    const [newData, setNewData] = useState([{}]);

    const [dataResult, setDataResult] = useState(initialData);
    const [flag, setFlag] = useState<boolean>(false)
    const [searchData, setSearchData] = useState();
    const [emptySearchData, setEmptySearchData] = useState<boolean>(false);

    //Error handling
    const [errorFirstname, setErrorFirstname] = useState<boolean>(false)
    const [errorLastname, setErrorLastname] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorPhoneNumberProf, setErrorPhoneNumberProf] = useState<boolean>(false)
    const [errorStreet, setErrorStreet] = useState<boolean>(false)
    const [errorPostalCode, setErrorPostalCode] = useState<boolean>(false)
    const [errorCity, setErrorCity] = useState<boolean>(false)

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [role, setRole] = useState("TEACHER")
    const [phoneNumberProf, setPhoneNumberProf] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")


    const [fileSelected, setFileSelected] = useState<File>()


    //Search input
    const handleSearch = (event: any): void => {
        const searchedProf = (event.target.value).toLowerCase()
        setSearchData(searchedProf)

        if (searchedProf) {
            if (data !== undefined) {

                const filteredSearch = data.getUsersByRole.filter((prof: any) => {
                    return (
                        prof.firstname.toLowerCase().includes(searchedProf) ||
                        prof.lastname.toLowerCase().includes(searchedProf)
                    )
                })

                if (filteredSearch.length === 0) {
                    setEmptySearchData(true)
                }

                else {
                    setDataResult({ getUsersByRole: filteredSearch })
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
    const handleDetails = (idElement: any) => {
        const filteredData = data.getUsersByRole.filter((elem: any) => elem._id === idElement)

        setFlag(true)
        setNewData(filteredData)
        setErrorFirstname(false)
        setErrorLastname(false)
        setErrorEmail(false)
        setErrorPhoneNumberProf(false)
        setErrorStreet(false)
        setErrorPostalCode(false)
        setErrorCity(false)
        setFileSelected(undefined)

        setFirstname("")
        setLastname("")
        setPhoneNumberProf("")
        setEmail("")
        setStreet("")
        setPostalCode("")
        setCity("")

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
                            <input
                                name="search"
                                id="search"
                                className={classes.searchInput}
                                placeholder="Recherche professeur par nom..."
                                value={searchData}
                                onChange={handleSearch}
                            />
                            <svg className={classes.searchIcon} width="22" height="22" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
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
                            </div>
                            :
                            searchData ?
                                dataResult.getUsersByRole.map((dataElement: any) =>
                                    <Card className={classes.card} key={shortid.generate()}>
                                        <CardContent className={classes.cardContent}>
                                            <img src={dataElement.picture} alt="professor-avatar" className={classes.image} />

                                            <div className={classes.cardDescription}>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {dataElement.firstname}
                                                </Subtitle2>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {dataElement.role}
                                                </Subtitle2>
                                                <Button className={classes.detailsButton} bordered onClick={() => handleDetails(dataElement._id)}>Détails</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                                :
                                data.getUsersByRole.map((dataElement: any) =>
                                    <Card className={classes.card} key={shortid.generate()} >
                                        <CardContent className={classes.cardContent}>
                                            <img src={dataElement.picture} alt="professor-avatar" className={classes.image} />
                                            <div className={classes.cardDescription}>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {dataElement.firstname}
                                                </Subtitle2>
                                                <Subtitle2 secondary className={classes.title} >
                                                    {dataElement.role}
                                                </Subtitle2>
                                                <Button className={classes.detailsButton} bordered onClick={() => handleDetails(dataElement._id)}>Détails</Button>
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
                                firstname={firstname}
                                setFirstname={setFirstname}
                                errorFirstname={errorFirstname}
                                setErrorFirstname={setErrorFirstname}
                                lastname={lastname}
                                setLastname={setLastname}
                                errorLastname={errorLastname}
                                setErrorLastname={setErrorLastname}
                                role={role}
                                setRole={setRole}
                                email={email}
                                setEmail={setEmail}
                                errorEmail={errorEmail}
                                setErrorEmail={setErrorEmail}
                                phoneNumberProf={phoneNumberProf}
                                setPhoneNumberProf={setPhoneNumberProf}
                                errorPhoneNumberProf={errorPhoneNumberProf}
                                setErrorPhoneNumberProf={setErrorPhoneNumberProf}
                                street={street}
                                setStreet={setStreet}
                                errorStreet={errorStreet}
                                setErrorStreet={setErrorStreet}
                                postalCode={postalCode}
                                setPostalCode={setPostalCode}
                                errorPostalCode={errorPostalCode}
                                setErrorPostalCode={setErrorPostalCode}
                                city={city}
                                setCity={setCity}
                                errorCity={errorCity}
                                setErrorCity={setErrorCity}
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
                            <Badge
                                bgColor='transparent'
                                color='var(--error)'
                                content={0}
                                bordered
                                overlap
                                borderColor='transparent' >
                                Gestion des messages
                            </Badge>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
};
