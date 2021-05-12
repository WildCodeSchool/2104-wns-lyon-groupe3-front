import React from 'react'
import { makeStyles } from "@material-ui/core"
import {  Button} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import { DELETE_USER } from './Queries'
import { useMutation, useQuery } from '@apollo/client'

const useStyles = makeStyles(theme => ({
 
}))
  
type dataProto = {
    dataElement: String
}

function Buttons({dataElement}:dataProto){
    const classes = useStyles()
    const [deleteUser, { data }] = useMutation(DELETE_USER);

    const handleSubmit = () => {
        console.log( dataElement)
        const result = deleteUser({
            variables: {
                id: dataElement
            }
        });

        alert(`vous avez effacé : ${dataElement}`)
        console.log(data)
    }

   // const { dark } = this.props
      return (
        <>   
            <Button
                bgColor='#FE5F55'
                color='#F7F7FF'
                style={{height:"25px",margin:"5px"}}
            >
                Enrégistrer les modifications
            </Button>
            <Button
                bgColor='#FE5F55'
                color='#F7F7FF'
                style={{ height: "25px", margin: "5px" }}
                onClick={handleSubmit}
            >
                Supprimer l'élève
            </Button>
        </>
    )

}

export default Buttons
