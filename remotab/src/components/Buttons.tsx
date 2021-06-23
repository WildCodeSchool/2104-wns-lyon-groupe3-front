import { makeStyles } from "@material-ui/core"
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import { DELETE_USER } from './Queries'
import { useMutation, useQuery } from '@apollo/client'
import { useToasts } from 'react-toast-notifications'

const useStyles = makeStyles(theme => ({

}))

type dataProto = {
    dataElement: String,
    setFlag: any,
    setAddButton: any,
    setUpdateButton: any,
    setIdUpdate: any,
}

export default function Buttons({
    dataElement,
    setFlag,
    setAddButton,
    setUpdateButton,
    setIdUpdate,

}: dataProto) {

    const classes = useStyles()
    const [removeUser, { data },] = useMutation(DELETE_USER);
    const { addToast } = useToasts()

    const handleSubmitupdate = () => {
        setIdUpdate(dataElement)
        setAddButton(true)
        setUpdateButton(true)
    }

    const handleSubmitDelete = () => {
        removeUser({
            variables: {
                id: dataElement
            }
        });

        if (data)
            addToast(`vous avez supprimé : ${data.removeUser.firstNameProf} ${data.removeUser.lastNameProf}`, {
                appearance: "error",
                autoDismiss: true
            })

        setFlag(false)
    }

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
                Supprimer le professeur
            </Button>
        </>
    )

}

