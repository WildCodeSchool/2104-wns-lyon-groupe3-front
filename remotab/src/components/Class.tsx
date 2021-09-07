import React from 'react'
import { makeStyles } from "@material-ui/core"

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
  

function Class(
   // { setDataResult, data ,dataResult}: LoadingProto
) {
    const classes = useStyles()
     
    return (
        <div >   
            Classes
        </div>
    )

}

export default Class
