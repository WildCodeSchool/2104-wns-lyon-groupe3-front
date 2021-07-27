import React from 'react'
import { makeStyles } from "@material-ui/core"
import {  Button} from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import { DELETE_USER } from './Queries'
import { useMutation, useQuery } from '@apollo/client'
import { useToasts } from 'react-toast-notifications'

import defaultImage from '../assets/defaultImage.png'

const useStyles = makeStyles(theme => ({
 
}))
  
type dataProto = {
    dataElement: String,
    setFlag: any,
    setAddButton: any,
    setUpdateButton: any,
    setIdUpdate: any,
    refetch: any
}

function Buttons({
    dataElement,
    setFlag,
    setAddButton,
    setUpdateButton,
    setIdUpdate,
    refetch

}: dataProto) {

    const classes = useStyles()
    const [deleteUser ] = useMutation(DELETE_USER);
    const { addToast } = useToasts()
    
    const handleSubmitupdate = () => {
        setIdUpdate(dataElement)
        setAddButton(true)
        setUpdateButton(true)

        //setUpdateButton(false)
    }

    const handleSubmitDelete = async () => {
        console.log(dataElement)
        //if (deleting) return;
        const id = dataElement

        const result = await deleteUser({
            variables: {
                id
            }
        });

        console.log(result.data.deleteUser.firstname)

        addToast(`vous avez supprimé : ${result.data.deleteUser.firstname} ${result.data.deleteUser.lastname}`, {
            appearance: "error",
            autoDismiss: true
        })

        refetch()

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
