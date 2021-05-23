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
    setFirstNameStudent: any,
    setLastNameStudent: any,
    //setClassStu(undefined)
    setNameParent: any,
    setNumberParent: any,
    setEmailParent: any,
    setStreet: any,
    setPostalCode: any,
    setTown: any,
    setFileSelected: any
}

function Buttons({
    dataElement,
    setFlag,
    setAddButton,
    setUpdateButton,
    setIdUpdate,

    setFirstNameStudent,
    setLastNameStudent,
    //setClassStu(undefined)
    setNameParent,
    setNumberParent,
    setEmailParent,
    setStreet,
    setPostalCode,
    setTown,
    setFileSelected,

}: dataProto) {

    const classes = useStyles()
    const [removeUser, { data}, ] = useMutation(DELETE_USER);
    const { addToast } = useToasts()
    
    const handleSubmitupdate = () => {
        setIdUpdate(dataElement)
        setAddButton(true)
        setUpdateButton(true)

        //setUpdateButton(false)
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
