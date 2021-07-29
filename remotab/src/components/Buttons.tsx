import { makeStyles } from "@material-ui/core"
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import { DELETE_USER, UPDATE_USER } from './Queries'
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
    refetch: any
}

export default function Buttons({
    dataElement,
    setFlag,
    setAddButton,
    setUpdateButton,
    setIdUpdate,
    refetch

}: dataProto) {

    const classes = useStyles()
    const [deleteUser] = useMutation(DELETE_USER);
    const [updateUserInfo] = useMutation(UPDATE_USER);
    const { addToast } = useToasts()

    const handleSubmitUpdate = () => {
        setIdUpdate(dataElement)
        setAddButton(true)
        setUpdateButton(true)
    }

    const handleSubmitDelete = async () => {

        const id = dataElement;

        const result = await deleteUser({
            variables: {
                id
            }
        });

        addToast(`Vous avez supprimé : ${result.data.deleteUser.firstname} ${result.data.deleteUser.lastname}`, {
            appearance: "error",
            autoDismiss: true
        })

        refetch()

        setFlag(false)
    }

    return (
        <>
            <Button
                bgColor='#FE5F55'
                color='#F7F7FF'
                style={{ height: "35px", margin: "5px" }}
                onClick={handleSubmitUpdate}
            >
                Enrégistrer les modifications
            </Button>
            <Button
                bgColor='#FE5F55'
                color='#F7F7FF'
                style={{ height: "35px", margin: "5px" }}
                onClick={handleSubmitDelete}
            >
                Supprimer le professeur
            </Button>
        </>
    )

}

