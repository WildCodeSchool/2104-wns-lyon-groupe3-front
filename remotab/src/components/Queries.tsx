import gql from "graphql-tag";



export const ALL_USERS = gql`
query GetAllUsers{
  allUsers{
    id
    firstNameStudent
    lastNameStudent
    classStudent
    photoProfil
    nameParent
    numberParent
    emailParent
    Adress{
      id
      street
      postalCode
      town
    }
  }
}`;

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

export const UPDATE_USER = gql`
    mutation UpdateUserInfo($id: String!) {
        updateUserInfo(id: $id){
            id
            firstNameStudent
            lastNameStudent
            classStudent
            photoProfil
            nameParent
            numberParent
            emailParent
            Adress{
                id
                street
                postalCode
                town
            }
        }
    }
`