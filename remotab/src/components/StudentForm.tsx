import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Avatar, Badge, Card, Subtitle2, CardContent, H5, TextArea } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import AddStudent from '../components/AddStudent';
import '../styles/neumorphism.css';
import { Search } from '@material-ui/icons';

import defaultImage from '../assets/defaultImage.png';
import { useQuery } from '@apollo/client';
import Loading from '../components/Loading';
import { ToastProvider } from 'react-toast-notifications';

import { ALL_STUDENT } from '../utils/Queries';
import HeaderAdmin from '../components/HeaderAdmin';
import { useLocation } from 'react-router-dom';


const useStyles = makeStyles(theme => ({

  toggleButtonNameAdmin: {
    position: "absolute",
    top: "20px",
    right: "80px",
    width: "150px"
  },
  logo: {
    width: "200px",
  },
  myCardPrincipal: {
    background: theme.palette.primary.main,
    position: "relative",
    height: "10vh",
    width: "18vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  myCardPrincipalStudent: {
    background: theme.palette.primary.dark,
    position: "relative",
    height: "85vh",
    width: "138vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  myBodyCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    textAlign: "center",
    minHeight: "70vh",
    placeItems: "center",
    marginTop: "15px"
  },
  myCardContentPrincipal: {
    background: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "130px"
  },
  myCardContentPrincipalStudent: {
    background: theme.palette.primary.dark,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "inherit",
    alignSelf: "center"
  },
  myCardActionPrincipal: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center"
  },
  myH5Principal: {
    color: theme.palette.primary.light,
    fontSize: "15px"
  },
  myH5PrincipalStudent: {
    color: theme.palette.primary.dark,
  },
  myBody2Principal: {
    color: theme.palette.primary.light,
    fontSize: "20px",
    textAlign: "center"
  },
  myButtonPrincipal: {
    color: theme.palette.primary.main,
    background: theme.palette.primary.light,
    width: "100px"
  },
  mySearchItem: {
    position: "absolute",
    right: "10px",
    top: "15px",
    fontSize: "22px",
    color: theme.palette.secondary.light
  },
  profCards: {
    position: "relative",
    width: "890px",
    border: "1px solid #F7F7FF",
    borderRadius: 10
  },
  studentCards: {
    display: 'flex',
    overflow: "auto"
  },
  card: {
    margin: 15
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
  cardContent: {
    display: "inline-flex",
  },
  cardDescription: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 16,
  },
  image: {
    marginRight: 5
  },
  mySearchBlock: {
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
  arrowBack: {
    position: "absolute",
    left: "15px",
    top: "34px",
    color: theme.palette.primary.contrastText
  },
  arrowForward: {
    position: "absolute",
    right: "15px",
    top: "34px",
    color: theme.palette.primary.contrastText
  },
}))

const initialData = {
  "getUsersByRole": [
    {
      "_id": "",
      "firstname": "",
      "lastname": "",
      "birthday": "",
      "addressInput": {
        "street": "",
        "postalCode": "",
        "city": ""
      },
      "role": "",
      "isActive": "",
      "picture": defaultImage,
    }
  ]
}

interface LocationState {
  pseudoAdmin: string
}

export default function StudentPage() {
  const classes = useStyles()
  const location = useLocation<LocationState>()

  const { loading, error, data, refetch } = useQuery(ALL_STUDENT, { variables: { role: 'STUDENT' } });
  const [newData, setNewData] = React.useState([{}])

  const [dataResult, setDataResult] = React.useState(initialData)
  const [flag, setFlag] = React.useState<boolean>(false)
  const [searchData, setSearchData] = React.useState()
  const [emptySearchData, setEmptySearchData] = React.useState<boolean>(false)

  const [errorfirstname, setErrorfirstname] = React.useState<boolean>(false)
  const [errorlastname, setErrorlastname] = React.useState<boolean>(false)
  const [errorClassStudent, setErrorClassStudent] = React.useState<boolean>(false)
  const [errorNameParent, setErrorNameParent] = React.useState<boolean>(false)
  const [errorNumberParent, setErrorNumberParent] = React.useState<boolean>(false)
  const [erroremail, setErroremail] = React.useState<boolean>(false)
  const [errorStreet, setErrorStreet] = React.useState<boolean>(false)
  const [errorPostalCode, setErrorPostalCode] = React.useState<boolean>(false)
  const [errorcity, setErrorcity] = React.useState<boolean>(false)

  const [firstname, setfirstname] = React.useState("")
  const [lastname, setlastname] = React.useState("")
  const [classStu, setClassStu] = React.useState("")
  const [nameParent, setNameParent] = React.useState("Paul")
  const [numberParent, setNumberParent] = React.useState("0786120987")
  const [email, setemail] = React.useState("")
  const [street, setStreet] = React.useState("")
  const [postalCode, setPostalCode] = React.useState("")
  const [city, setcity] = React.useState("")
  const [role, setRole] = React.useState("STUDENT")

  const [fileSelected, setFileSelected] = React.useState<File>()

  const [loadingTest, setLoadingTest] = React.useState<boolean>(true)


  const handleCard = (idElement: any) => {

    const filtered = data.getUsersByRole.filter((e: any) => e._id === idElement)

    setFlag(true)
    setNewData(filtered)
    setErrorfirstname(false)
    setErrorlastname(false)
    setErrorClassStudent(false)
    setErrorNameParent(false)
    setErrorNumberParent(false)
    setErroremail(false)
    setErrorStreet(false)
    setErrorPostalCode(false)
    setErrorcity(false)
    setFileSelected(undefined)

    setfirstname("")
    setlastname("")
    setClassStu("")
    setNameParent("")
    setNumberParent("")
    setemail("")
    setStreet("")
    setPostalCode("")
    setcity("")
  }

  const handleSearch = (event: any): void => {
    const mySearchItem = event.value
    setSearchData(mySearchItem)

    if (mySearchItem) {
      if (data !== undefined) {
        const searchFiltered = data.getUsersByRole.filter((element: any) => element.classStudent === Number(mySearchItem))

        if (searchFiltered.length === 0) {
          console.log("mes data2: ", dataResult)
          setEmptySearchData(true)
        } else {
          setDataResult({ getUsersByRole: searchFiltered })
          setEmptySearchData(false)
        }
      }

    } else {
      setDataResult(data)
      setEmptySearchData(false)

    }
  }


  if (loading)
    return <Loading />

  if (error)
    return <div data-testid="error-message">Erreur...</div>

  return (
    <div data-testid="content">
      <HeaderAdmin name={location.state.pseudoAdmin} />
      {data &&
        <div className={classes.myBodyCard}>
          <Card className={classes.myCardPrincipal}>
            <CardContent className={classes.myCardContentPrincipal}>
              <H5 className={classes.myH5Principal}>
                GESTION DES PROFESSEURS
              </H5>
            </CardContent>
          </Card>
          <Card className={classes.myCardPrincipalStudent}>
            <div className={classes.myCardContentPrincipalStudent}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className={classes.mySearchBlock} >
                  <input
                    name="searchData"
                    onChange={handleSearch}
                    value={searchData}
                    placeholder="Je recherche par classe"
                    className={classes.searchInput}
                  />
                  <svg className={classes.searchIcon} width="22" height="22" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
                </div>
              </div>
              <div className={classes.profCards}>
                <div className={classes.studentCards} >
                  {
                    emptySearchData ?
                      <div className={classes.cardEmptyDiv}>
                        <Card className={classes.cardEmpty}>
                          <CardContent className={classes.cardContent}>
                            <Subtitle2 secondary className={classes.title}>Aucun résultat ne correspond à la recherche</Subtitle2>
                          </CardContent>
                        </Card>
                      </div>
                      :
                      searchData ?
                        dataResult.getUsersByRole.map((dataElement: any) =>
                          <Card className={classes.card} key={dataElement._id}>
                            <CardContent className={classes.cardContent}>
                              <Avatar src={dataElement.picture} alt="professor-avatar" className={classes.image} />
                              <div className={classes.cardDescription}>
                                <Subtitle2 secondary className={classes.title} >
                                  {`${dataElement.firstname} ${dataElement.lastname}`}
                                </Subtitle2>
                                <button
                                  onClick={() => handleCard(dataElement._id)}
                                  className="moreDetailsButton"
                                >Détails</button>
                              </div>
                            </CardContent>
                          </Card>
                        )
                        :
                        data.getUsersByRole.map((dataElement: any) =>
                          <Card className={classes.card} key={dataElement._id} >
                            <CardContent className={classes.cardContent}>
                              <Avatar src={dataElement.picture} alt="professor-avatar" className={classes.image} />
                              <div className={classes.cardDescription}>
                                <Subtitle2 secondary className={classes.title} >
                                  {`${dataElement.firstname} ${dataElement.lastname}`}
                                </Subtitle2>
                                <button
                                  onClick={() => handleCard(dataElement._id)}
                                  className="moreDetailsButton"
                                >Détails</button>
                              </div>
                            </CardContent>
                          </Card>
                        )
                  }
                </div>
              </div>
              <div>
                <ToastProvider>
                  <AddStudent
                    refetch={refetch}
                    newData={newData}
                    flag={flag}
                    setFlag={setFlag}

                    errorfirstname={errorfirstname}
                    setErrorfirstname={setErrorfirstname}
                    errorlastname={errorlastname}
                    setErrorlastname={setErrorlastname}
                    errorClassStudent={errorClassStudent}
                    setErrorClassStudent={setErrorClassStudent}
                    errorNameParent={errorNameParent}
                    setErrorNameParent={setErrorNameParent}
                    errorNumberParent={errorNumberParent}
                    setErrorNumberParent={setErrorNumberParent}
                    erroremail={erroremail}
                    setErroremail={setErroremail}
                    errorStreet={errorStreet}
                    setErrorStreet={setErrorStreet}
                    errorPostalCode={errorPostalCode}
                    setErrorPostalCode={setErrorPostalCode}
                    errorcity={errorcity}
                    setErrorcity={setErrorcity}
                    fileSelected={fileSelected}
                    setFileSelected={setFileSelected}

                    firstname={firstname}
                    setfirstname={setfirstname}
                    lastname={lastname}
                    setlastname={setlastname}
                    classStu={classStu}
                    setClassStu={setClassStu}
                    nameParent={nameParent}
                    setNameParent={setNameParent}
                    numberParent={numberParent}
                    setNumberParent={setNumberParent}
                    email={email}
                    setemail={setemail}
                    street={street}
                    setStreet={setStreet}
                    postalCode={postalCode}
                    setPostalCode={setPostalCode}
                    city={city}
                    setcity={setcity}

                    role={role}
                    setRole={setRole}
                  />
                </ToastProvider>
              </div>
            </div>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "50vh" }}>
            <Card className={classes.myCardPrincipal}>
              <CardContent className={classes.myCardContentPrincipal}>
                <H5 className={classes.myH5Principal}>
                  GESTION DES CLASSES
                </H5>
              </CardContent>
            </Card>
            <Card className={classes.myCardPrincipal}>
              <CardContent className={classes.myCardContentPrincipal}>
                <Badge
                  bgColor='transparent'
                  color='var(--error)'
                  content={0}
                  bordered
                  overlap
                  borderColor='transparent'
                >
                  <H5 className={classes.myH5Principal}>
                    GESTION DES MESSAGES
                  </H5>
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      }
    </div>
  )
}