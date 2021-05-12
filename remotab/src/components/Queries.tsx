import gql from "graphql-tag";




export const DELETE_USER = gql`
    mutation DeleteUser($id: String!) {
        deleteUser(id: $id)
    }
`