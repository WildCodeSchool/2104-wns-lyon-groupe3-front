import { Button } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';

import { DELETE_USER } from './Queries';
import { useMutation } from '@apollo/client';
import { useToasts } from 'react-toast-notifications';
import { gql } from "@apollo/client";



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

    const GET_USER = gql`
    query GetUser($id: String!) {
      user(id: $id) {
        firstname
        lastname
      }
    }
  `;

    const [deleteUser] = useMutation(DELETE_USER);
    const { addToast } = useToasts()

    const handleSubmitUpdate = () => {
        setIdUpdate(dataElement)
        setAddButton(true)
        setUpdateButton(true)
    }

    const handleSubmitDelete = async () => {

        const id = dataElement;

        try {
            const result = await deleteUser({
                variables: { id }
            });

            addToast(`Vous avez supprimé : ${result.data.deleteUser.firstname} ${result.data.deleteUser.lastname}`, {
                appearance: "error",
                autoDismiss: true
            })
        }
        catch (error) {
            console.log(error)
        }

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

