import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"
import { Avatar, Badge, Body2, Button, Card, Subtitle2, CardContent, Fab, H5, Tab, TabItem, TabItems, Tabs, TextArea, ToggleButton} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import AddStudent from '../components/AddStudent'
import '../styles/neumorphism.css'
import { Search } from '@material-ui/icons'

import defaultImage from '../assets/defaultImage.png'

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
        height: "81vh",
        width: "128vh",
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
        marginTop: "40px"
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
      height: "-webkit-fill-available",
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
    right: "50px",
    top: "30px",
    color: theme.palette.secondary.light
  },
  profCards: {
    display: 'inline-flex',
    justifyContent: "space-evenly",
    //padding: 40,
    //margin: 20,
    border: "1px solid #F7F7FF",
    borderRadius: 20
  },
  card: {
      width: 120,
      margin: 15
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
      marginRight: 10
  },
}))
  

function StudentPage(){
    const classes = useStyles()

      return (
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
              <div style={{display:"flex", flexDirection:"row-reverse", height: "40px"}}>
                <TextArea
                  placeholder="Je rechercher"
                />
                <Search className={classes.mySearchItem}/>
              </div>
              <div className={classes.profCards}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Avatar src={defaultImage} alt="professor-avatar" className={classes.image} />
                      <div className={classes.cardDescription}>
                        <Subtitle2 secondary className={classes.title} >
                          Nom
                        </Subtitle2>                      
                        <Subtitle2 secondary className={classes.title} >
                          Classe
                        </Subtitle2>            
                      </div>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Avatar src={defaultImage} alt="professor-avatar" className={classes.image} />
                    <div className={classes.cardDescription}>
                      <Subtitle2 secondary className={classes.title} >
                          Nom
                      </Subtitle2>
                      <Subtitle2 secondary className={classes.title} >
                        Classe
                      </Subtitle2>
                    </div>
                  </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Avatar src={defaultImage} alt="professor-avatar" className={classes.image} />
                    <div className={classes.cardDescription}>
                          <Subtitle2 secondary className={classes.title} >
                            Nom
                          </Subtitle2>
                          <Subtitle2 secondary className={classes.title} >
                            Classe
                          </Subtitle2>
                    </div>
                  </CardContent>
                </Card>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Avatar src={defaultImage} alt="professor-avatar" className={classes.image} />
                    <div className={classes.cardDescription}>
                      <Subtitle2 secondary className={classes.title}>
                        Nom
                      </Subtitle2>
                      <Subtitle2 secondary className={classes.title} >
                          Classe
                      </Subtitle2>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <AddStudent/>
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
                    
                //    className={classes.myBadgePrincipal}
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
