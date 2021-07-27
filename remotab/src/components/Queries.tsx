import gql from "graphql-tag";

export const ALL_PROFS = gql`
query GetAllProfessors {
  allUsers {
    id
    firstNameProf
    lastNameProf
    titreProf
    photoProfil
    emailAddress
    phoneNumberProf
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
            firstNameProf
            lastNameProf
            photoProfil
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateUserInfo($id: String!) {
        updateUserInfo(id: $id){
            id
            firstNameProf
            lastNameProf
            titreProf
            photoProfil
            emailAddress
            phoneNumberProf
            Address {
                street
                postalCode
                town
            }
        }
    }
`