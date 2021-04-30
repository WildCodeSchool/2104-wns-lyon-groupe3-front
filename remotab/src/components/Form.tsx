import React from 'react'
import { makeStyles } from "@material-ui/core"
import { Badge, Body2, Button, Card, CardAction, CardContent, Fab, H5, ToggleButton} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

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
        height: "40vh",
        width: "48vh",
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
        placeItems: "center"
    },
    myCardContentPrincipal: {
        background: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height:"130px"
    },
    myCardActionPrincipal: {
        background: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center"
    },
    myH5Principal: {
        color: theme.palette.primary.light,
        fontSize: "25px"
    },
    myBody2Principal: {
        color: theme.palette.primary.dark,
        fontSize: "18px",
        textAlign: "center"
    },
    myButtonPrincipal: {
        color: theme.palette.primary.light,
        background: theme.palette.primary.main,
        width: "150px",
        height: "60px"
    },
    myBadgePrincipal: {
        color: theme.palette.secondary.light
    }
  }))
  

function FormView(){
    const classes = useStyles()

   // const { dark } = this.props
      return (
        <div className={classes.myBodyCard}>   
              <Card className={classes.myCardPrincipal}>
                <CardContent className={classes.myCardContentPrincipal}>
                    <H5 className={classes.myH5Principal}>
                        GESTION DES PROFESSEURS
                    </H5>
                    <Body2 className={classes.myBody2Principal}>
                        Liste, ajout, modification et suppression des informations des professeurs
                    </Body2>
                </CardContent>
                <CardAction className={classes.myCardActionPrincipal}>
                    <Button className={classes.myButtonPrincipal}>
                        Accéder
                    </Button>
                </CardAction>
              </Card>
              <Card className={classes.myCardPrincipal}>
                <CardContent className={classes.myCardContentPrincipal}>
                    <H5 className={classes.myH5Principal}>
                        GESTION DES ELEVES
                    </H5>
                      <Body2 className={classes.myBody2Principal}>
                        Liste, ajout, modification et suppression des informations des élèves
                        
                    </Body2>
                </CardContent>
                <CardAction className={classes.myCardActionPrincipal}>
                    <Button  className={classes.myButtonPrincipal}>
                        Accéder
                    </Button>
                </CardAction>
              </Card>
              <Card className={classes.myCardPrincipal}>
                <CardContent className={classes.myCardContentPrincipal}>
                    <H5 className={classes.myH5Principal}>
                        GESTION DES CLASSES
                    </H5>
                    <Body2 className={classes.myBody2Principal}>
                     Liste, ajout, modification, suppression des classes et emploi du temps
                    </Body2>
                </CardContent>
                <CardAction className={classes.myCardActionPrincipal}>
                    <Button className={classes.myButtonPrincipal}>
                        Accéder
                    </Button>
                </CardAction>
              </Card>
              <Card className={classes.myCardPrincipal}>
                  <CardContent className={classes.myCardContentPrincipal}>
                      <Badge
                          bgColor='var(--error)'
                          color='var(--white)'
                          content={0}
                          bordered
                          overlap
                          borderColor='var(--error)'
                          
                      //    className={classes.myBadgePrincipal}
                      >
                        <H5 className={classes.myH5Principal}>
                            GESTION DES MESSAGES
                        </H5>                         
                      </Badge>

                    <Body2 className={classes.myBody2Principal}>
                        Communication par message avec l'ensemble de la vie social de l'école, ainsi que des professeurs
                    </Body2>
                </CardContent>
                <CardAction className={classes.myCardActionPrincipal}>
                    <Button className={classes.myButtonPrincipal}>
                        Accéder
                    </Button>
                </CardAction>
              </Card>
        </div>
    )

}

export default FormView
