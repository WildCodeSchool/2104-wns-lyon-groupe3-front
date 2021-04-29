import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"
import { Body2, Button, Card, CardAction, CardContent, Fab, H5, Tab, TabItem, TabItems, Tabs, ToggleButton} from 'ui-neumorphism'
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
        height: "10vh",
        width: "18vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    myCardPrincipalStudent: {
        background: theme.palette.primary.dark,
        position:"relative",
        height: "80vh",
        width: "108vh",
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
    }
  }))
  

function StudentPage(){
    const classes = useStyles()
    const [active, setActive] = useState<number>(0)

    const tabItems = (
        <TabItems value={active} >
          <TabItem>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </div>
          </TabItem>
          <TabItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </TabItem>
          <TabItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </TabItem>
        </TabItems>
      )

   // const { dark } = this.props
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
                  <CardContent className={classes.myCardContentPrincipalStudent}>
                      <div>

                      </div>
                </CardContent>
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
                        <H5 className={classes.myH5Principal}>
                            GESTION DES MESSAGES
                        </H5>
                    </CardContent>
                </Card>
              </div>

        </div>
    )

}

export default StudentPage
