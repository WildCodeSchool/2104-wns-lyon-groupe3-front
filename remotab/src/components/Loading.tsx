import React from 'react'
import { makeStyles } from "@material-ui/core"
import { Badge, Body2, Button, Card, CardAction, CardContent, H5} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import CircularProgress from '@material-ui/core/CircularProgress'

type LoadingProto = {
    setDataResult: any,
    data: any,
    dataResult: any
}

const useStyles = makeStyles(theme => ({

    myBodyCard: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        textAlign: "center",
        minHeight: "70vh",
        placeItems: "center"
    },

  }))
  

function Loading(
   // { setDataResult, data ,dataResult}: LoadingProto
) {
    const classes = useStyles()
     
    return (
        <div data-testid="loading-message" className={classes.myBodyCard}>   
            <CircularProgress />
        </div>
    )

}

export default Loading
