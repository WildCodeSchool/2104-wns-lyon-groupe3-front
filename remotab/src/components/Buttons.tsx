import { Button } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import { DELETE_USER } from '../utils/Queries';
import { useMutation } from '@apollo/client'
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
/* Paola   
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

        // set

        addToast(`vous avez supprimé : ${result.data.deleteUser.firstname} ${result.data.deleteUser.lastname}`, {
            appearance: "error",
            autoDismiss: true
        })
*/
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
              // const { dark } = this.props
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
            <Button
                style={{ height: "25px", margin: "5px" }}
                onClick={handleSubmitDelete}
            >
                Supprimer l'élève
            </Button>

              {/* {
                  dialogValid ?
                  <Dialog
                  open={open}
                  onClose={()=>setOpen(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
              >
                  <DialogTitle id="alert-dialog-title">
                      {`Voulez-vous vraiment supprimer l'élève ${}`}
                  </DialogTitle>
                  <DialogActions
                      style={{display:"flex", justifyContent:"space-around"}}
                  >
                      <button
                          onClick={() => setOpen(false)}
                          style={{background:"#FE5F55",color:"whitesmoke"}}
                          className="validButton"
                      >
                          Non
                      </button>
                      <button
                          onClick={handleSend}
                          color="secondary"
                          className="validButton"
                          style={{color:"#FE5F55"}}
                      >
                          Oui
                      </button>
                  </DialogActions>
              </Dialog> : null
              } */}
        </>
    )

}