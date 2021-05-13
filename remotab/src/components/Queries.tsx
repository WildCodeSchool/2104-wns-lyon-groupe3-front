import gql from "graphql-tag";




export const DELETE_USER = gql`
    mutation DeleteUser($id: String!) {
        removeUser(id: $id){
            id
            firstNameStudent
            lastNameStudent
            classStudent
            photoProfil

        }
    }
`