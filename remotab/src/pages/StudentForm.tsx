import React from 'react'
import { makeStyles } from "@material-ui/core"
import { Avatar, Badge, Card, Subtitle1,Subtitle2, CardContent,  H5, TextArea} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import AddStudent from '../components/AddStudent'
import '../styles/neumorphism.css'
import { Search } from '@material-ui/icons'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import defaultImage from '../assets/defaultImage.png'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import Loading from '../components/Loading'
import { ToastProvider } from 'react-toast-notifications'

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
        position:"relative",
        height: "10vh",
        width: "18vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    myCardPrincipalStudent: {
        background: theme.palette.primary.dark,
        position:"relative",
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
        height:"130px"
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
    /* left: 0; */
    right: "10px",
    top: "15px",
    fontSize:"22px",
    color: theme.palette.secondary.light
  },
  profCards: {
    position: "relative",
    //padding: 40,
    //margin: 20,
    width:"890px",
    border: "1px solid #F7F7FF",
    borderRadius: 10
  },
  studentCards: {
    display: 'flex',
    overflow:"auto"
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
     // width: 60,
      marginRight: 5
  },
  mySearchBlock: {
    display: "flex",
    flexDirection: "row-reverse",
    height: "40px",
    position: "relative"
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

// const data = [
//   {
//     id:"1",
//     image: "https://wl-sympa.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg",
//     firstNameStudent: "Dominique",
//     lastNameStudent: "Leblanc ",
//     classStudent: "Tle S",
//     nameParent: "Len Leblanc",
//     numberParent: "0731721650",
//     emailParent: "id.blandit@Cras.edu",
//     street: "1244 Quis Street",
//     postalCode: "75000",
//     town: "Paris"
    
//   },
//   {
//     id:"2",
//     image: "https://www.profil.fr/wp-content/uploads/2019/05/Laurent-LOUVION.jpg",
//     firstNameStudent: "Hedwig",
//     lastNameStudent: "Heath",
//     classStudent: "Tle S",
//     nameParent: "Keith Heath",
//     numberParent: "0904370949",
//     emailParent: "sollicitudin.orci@mauris.com",
//     street: "191-5832 Lacus. Road",
//     postalCode: "69000",
//     town: "Lyon"
//   },
//   {
//     id:"3",
//     image: "https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg",
//     firstNameStudent: "Hedwig",
//     lastNameStudent: "Price",
//     classStudent: "6ième",
//     nameParent: "Finn Price",
//     numberParent: "0734409325",
//     emailParent: "elit@risusDuisa.co.uk",
//     street: "3 rue de saint Cyr",
//     postalCode: "49300",
//     town: "Cholet"
//   },
//   {
//     id:"4",
//     image: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
//     firstNameStudent: "Brock",
//     lastNameStudent: "Watson",
//     classStudent: "6ième",
//     nameParent: "Rigel P. Watson",
//     numberParent: "0734409325",
//     emailParent: "magna.Suspendisse@molestie.ca",
//     street: "5 avenue Melaine",
//     postalCode: "49300",
//     town: "Cholet"
//   },
//   {
//     id:"5",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi48Y84fkQY2M3I2qzBIVT4v5Bkuzsm50Fdw&usqp=CAU",
//     firstNameStudent: "Brock",
//     lastNameStudent: "Watson",
//     classStudent: "6ième",
//     nameParent: "Rigel P. Watson",
//     numberParent: "0734409325",
//     emailParent: "magna.Suspendisse@molestie.ca",
//     street: "5 avenue Melaine",
//     postalCode: "49300",
//     town: "Cholet"
//   },
//   {
//     id:"6",
//     image: "https://www.lyon-photo.fr/wp-content/uploads/2020/02/photo-profil-viadeo.jpg",
//     firstNameStudent: "Dominique",
//     lastNameStudent: "Leblanc",
//     classStudent: "Tle S",
//     nameParent: "Len Leblanc",
//     numberParent: "0731721650",
//     emailParent: "id.blandit@Cras.edu",
//     street: "1244 Quis Street",
//     postalCode: "75000",
//     town: "Paris"
//   },
//   {
//     id:"7",
//     image: "https://www.fc-photos.com/wp-content/uploads/2016/09/fc-photos-Weynacht-0001.jpg",
//     firstNameStudent: "Hedwig",
//     lastNameStudent: "Heath",
//     classStudent: "2nd",
//     nameParent: "Keith Heath",
//     numberParent: "0904370949",
//     emailParent: "sollicitudin.orci@mauris.com",
//     street: "191-5832 Lacus. Road",
//     postalCode: "69000",
//     town: "Lyon"
//   }
// ]


// const matchForm = (searchData:string) => {
//    if (!searchData) {
//      return () => true
//    }
//    const tokens = searchData.toLowerCase().match(/\S+/g)
   
//    return (item:any) => {
//      const str = JSON.stringify(item).toLowerCase()
//      console.log(str)
//      return str
//    }
//  }

export const ALL_USERS = gql`
query GetAllUsers{
  allUsers{
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
}`;

const initialData = {
  "allUsers": [
    {
      "id": "",
      "firstNameStudent": "",
      "lastNameStudent": "",
      "classStudent": "",
      "photoProfil": defaultImage,
      "nameParent": "",
      "numberParent":"",
      "emailParent":"",
      "Adress":{
        "id":"",
        "street":"",
        "postalCode":"",
        "town":""
      }
    }
  ]
}

function StudentPage() {
  const classes = useStyles()



  const [newData, setNewData] = React.useState([{}])
  const { loading, error, data, refetch} = useQuery(ALL_USERS);
  
  const [dataResult, setDataResult] = React.useState(initialData)
  const [flag, setFlag] = React.useState<boolean>(false)
  const [searchData, setSearchData] = React.useState()
  const [emptySearchData, setEmptySearchData] = React.useState<boolean>(false)
  
  const [errorFirstNameStudent, setErrorFirstNameStudent] = React.useState<boolean>(false)
  const [errorLastNameStudent, setErrorLastNameStudent] = React.useState<boolean>(false)
  const [errorClassStudent, setErrorClassStudent] = React.useState<boolean>(false)
  const [errorNameParent, setErrorNameParent] = React.useState<boolean>(false)
  const [errorNumberParent, setErrorNumberParent] = React.useState<boolean>(false)
  const [errorEmailParent, setErrorEmailParent] = React.useState<boolean>(false)
  const [errorStreet, setErrorStreet] = React.useState<boolean>(false)
  const [errorPostalCode, setErrorPostalCode] = React.useState<boolean>(false)
  const [errorTown, setErrorTown] = React.useState<boolean>(false)

  const [firstNameStudent, setFirstNameStudent] = React.useState("")
  const [lastNameStudent, setLastNameStudent] = React.useState("")
  const [classStu, setClassStu] = React.useState<Number>()
  const [nameParent, setNameParent] = React.useState("")
  const [numberParent, setNumberParent] = React.useState("")
  const [emailParent, setEmailParent] = React.useState("")
  const [street, setStreet] = React.useState("")
  const [postalCode, setPostalCode] = React.useState("")
  const [town, setTown] = React.useState("")

  const [fileSelected, setFileSelected] = React.useState<File>()

  const [loadingTest, setLoadingTest] = React.useState<boolean>(true)

  const handleCard = (idElement:any) => {
    const filtered = data.allUsers.filter((e:any) => e.id === idElement)
    setFlag(true)
    setNewData(filtered)
    setErrorFirstNameStudent(false)
    setErrorLastNameStudent(false)
    setErrorClassStudent(false)
    setErrorNameParent(false)
    setErrorNumberParent(false)
    setErrorEmailParent(false)
    setErrorStreet(false)
    setErrorPostalCode(false)
    setErrorTown(false)
    setFileSelected(undefined)

    setFirstNameStudent("")
    setLastNameStudent("")
    //setClassStu(null)
    setNameParent("")
    setNumberParent("")
    setEmailParent("")
    setStreet("")
    setPostalCode("")
    setTown("")
  }
  //setDataResult(data)
  const handleSearch = (event: any): void => {
    const mySearchItem = event.value
    setSearchData(mySearchItem)

    if (mySearchItem) {
      if (data !== undefined) {
        const searchFiltered = data.allUsers.filter((element: any) => element.classStudent === Number(mySearchItem))
        //return element.classStudent.toLowerCase().indexOf(mySearchItem.toLowerCase()) >= 0
        //console.log(mySearchItem)
        
        if (searchFiltered.length === 0) {
          //setDataResult(searchFiltered)
          console.log("mes data2: ",dataResult)
          setEmptySearchData(true)
        } else {
          setDataResult({allUsers: searchFiltered})
          setEmptySearchData(false)
        }
      }

    } else {
      setDataResult(data)
      setEmptySearchData(false)
      
    }
  }

  
  //dataResult && console.log(dataResult.map((e: any) => e.classStudent))
  
  // if (loadingTest) 
  //   return (
  //     <Loading setLoadingTest={setLoadingTest} />
  //   )
  
  if (loading) {
    return (
      <Loading
        // setDataResult={setDataResult}
        // data={data}
        // dataResult={dataResult}
      />
    )
  }

  
  if (error)
    return <p>Error ...</p>
  
  
  return (
    data &&
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
            <div className={classes.mySearchBlock} >
              <TextArea
                name="searchData"
                onChange={handleSearch}
                value={searchData}
                placeholder="Je recherche par classe"
              />
              <Search className={classes.mySearchItem} />
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
                    dataResult.allUsers.map((dataElement: any) =>
                      <Card className={classes.card} >
                        <CardContent className={classes.cardContent}>
                          <Avatar src={dataElement.photoProfil} alt="professor-avatar" className={classes.image} />
                          <div className={classes.cardDescription}>
                            <Subtitle2 secondary className={classes.title} >
                              {dataElement.lastNameStudent}
                            </Subtitle2>
                            <Subtitle1 secondary className={classes.title} >
                              {dataElement.classStudent}
                            </Subtitle1>
                            <button
                              onClick={() => handleCard(dataElement.id)}
                              className="moreDetailsButton"
                            >Détails</button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                    :
                    data.allUsers.map((dataElement: any) =>
                    <Card className={classes.card} >
                      <CardContent className={classes.cardContent}>
                        <Avatar src={dataElement.photoProfil} alt="professor-avatar" className={classes.image} />
                        <div className={classes.cardDescription}>
                          <Subtitle2 secondary className={classes.title} >
                            {dataElement.lastNameStudent}
                          </Subtitle2>
                          <Subtitle1 secondary className={classes.title} >
                            {dataElement.classStudent}
                          </Subtitle1>
                          <button
                            onClick={() => handleCard(dataElement.id)}
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
                  newData={newData}
                  flag={flag}
                  setFlag={setFlag}
                
                  errorFirstNameStudent={errorFirstNameStudent}
                  setErrorFirstNameStudent={setErrorFirstNameStudent}
                  errorLastNameStudent={errorLastNameStudent}
                  setErrorLastNameStudent={setErrorLastNameStudent}
                  errorClassStudent={errorClassStudent}
                  setErrorClassStudent={setErrorClassStudent}
                  errorNameParent={errorNameParent}
                  setErrorNameParent={setErrorNameParent}
                  errorNumberParent={errorNumberParent}
                  setErrorNumberParent={setErrorNumberParent}
                  errorEmailParent={errorEmailParent}
                  setErrorEmailParent={setErrorEmailParent}
                  errorStreet={errorStreet}
                  setErrorStreet={setErrorStreet}
                  errorPostalCode={errorPostalCode}
                  setErrorPostalCode={setErrorPostalCode}
                  errorTown={errorTown}
                  setErrorTown={setErrorTown}
                  fileSelected={fileSelected}
                  setFileSelected={setFileSelected}
                
                  firstNameStudent={firstNameStudent}
                  setFirstNameStudent={setFirstNameStudent}
                  lastNameStudent={lastNameStudent}
                  setLastNameStudent={setLastNameStudent}
                  classStu={classStu}
                  setClassStu={setClassStu}
                  nameParent={nameParent}
                  setNameParent={setNameParent}
                  numberParent={numberParent}
                  setNumberParent={setNumberParent}
                  emailParent={emailParent}
                  setEmailParent={setEmailParent}
                  street={street}
                  setStreet={setStreet}
                  postalCode={postalCode}
                  setPostalCode={setPostalCode}
                  town={town}
                  setTown={setTown}
                />
              </ToastProvider>
            </div>
          </div>
        </Card>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around", height:"50vh"}}>
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
)
}

export default StudentPage
