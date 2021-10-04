import { gql } from "@apollo/client";

export const ALL_PROFS = gql`
query User {
    getAllUsers {
        _id
        firstname
        lastname
        role
        picture
        email
        password
        isActive
        address {
            street
            postalCode
            city
        }
    }
}
`;

export const CREATE_USER = gql`
mutation createUser(
        $firstname: String!,
        $lastname: String!,
        $email: String!,
        $addressInput: addressInput!,
        $role: String,
        $isActive: String,
        $picture: String,
        $phoneNumberProf: String
    ) {
        createUser(
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            address: $addressInput,
            role: $role,
            isActive: $isActive,
            picture: $picture,
            phoneNumberProf: $phoneNumberProf
        ) {
            firstname,
            lastname,
            email,
            address{
                street,
                postalCode,
                city
            },
            role,
            isActive,
            picture,
            phoneNumberProf
    }
  }
`;

export const DELETE_USER = gql`
     mutation deleteUser(
        $id: String!
    ) {
        deleteUser(id: $id) 
        {
            _id,
            firstname,
            lastname,
            email,
            address{ street, postalCode, city},
            role,
            isActive,
            picture
        }
    } 
`

export const UPDATE_USER = gql`
   mutation updateUser(
    $id: String!,
    $firstname: String!,
    $lastname: String!,
    $email: String!,
    $address: addressInput!,
    $role: String,
    $isActive: String,
    $picture: String,
    $phoneNumberProf: String
) {
    updateUser(
        id: $id,
        firstname: $firstname,
        lastname: $lastname,
        email: $email,
        address: $address,
        role: $role,
        isActive: $isActive,
        picture: $picture,
        phoneNumberProf: $phoneNumberProf
    ) {
        _id,
        firstname,
        lastname,
        email,
        address{
            street,
            postalCode,
            city
        },
        role,
        isActive,
        picture,
        phoneNumberProf
    }
} 
`

export const PROF = gql`
    query UserProf(
        $role: String!
    ){
        getUsersByRole(role: $role)
        {
            _id
            firstname
            lastname
            email
            password
            address{street, postalCode, city}
            role
            isActive
            picture
        }
    }
`;