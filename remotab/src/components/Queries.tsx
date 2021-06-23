import gql from "graphql-tag";

export const ALL_PROFS = gql`
query GetAllProfessors {
  allUsers {
    id
    firstName
    lastName
    titre
    photoProfil
    emailAddress
    phoneNumber
    Address {
      street
      postalCode
      town
    }
  }
}
`;


export const DELETE_USER = gql`
    mutation DeleteUser($id: String!) {
        removeUser(id: $id){
            id
            firstName
            lastName
            photoProfil
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateUserInfo($id: String!) {
        updateUserInfo(id: $id){
            id
            firstName
            lastName
            titre
            photoProfil
            emailAddress
            phoneNumber
            Address {
                street
                postalCode
                town
            }
        }
    }
`