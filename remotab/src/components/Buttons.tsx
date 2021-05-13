import React from 'react'
import { makeStyles } from "@material-ui/core"
import {  Button} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import { DELETE_USER } from './Queries'
import { useMutation, useQuery } from '@apollo/client'
import { useToasts } from 'react-toast-notifications'

const useStyles = makeStyles(theme => ({
 
}))
  
type dataProto = {
    dataElement: String,
    setFlag: any
}

function Buttons({dataElement, setFlag}:dataProto){
    const classes = useStyles()
    const [removeUser, { data}, ] = useMutation(DELETE_USER);
    const { addToast } = useToasts()
    
    const handleSubmitupdate = () => {
        addToast(`vous avez modifié les informations de l'élève : ${dataElement}`, {
            appearance: "warning",
            autoDismiss: true
        })
    }

    const handleSubmitDelete = () => {
        console.log(dataElement)
        //if (deleting) return;

        removeUser({
            variables: {
                id: dataElement
            }
        });

        if(data)
            addToast(`vous avez supprimé : ${data.removeUser.firstNameStudent} ${data.removeUser.lastNameStudent}`, {
                appearance: "error",
                autoDismiss: true
            })

        setFlag(false)
    }

   // const { dark } = this.props
      return (
        <>   
            <Button
                bgColor='#FE5F55'
                color='#F7F7FF'
                  style={{ height: "25px", margin: "5px" }}
                  onClick={handleSubmitupdate}
            >
                Enrégistrer les modifications
            </Button>
            <Button
                bgColor='#FE5F55'
                color='#F7F7FF'
                style={{ height: "25px", margin: "5px" }}
                onClick={handleSubmitDelete}
            >
                Supprimer l'élève
            </Button>
        </>
    )

}

export default Buttons
