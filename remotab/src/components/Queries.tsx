import {gql} from "@apollo/client";



export const ALL_USERS = gql`
    query User{
        getAllUsers{
            _id
            firstname
            lastname
            birthday
            email
            password
            address{
                street
                postalCode
                city
            }
            role
            isActive
            picture
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
        $birthday: String,
        $picture: String,
    ) {
        createUser(
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            address: $addressInput,
            role: $role,
            isActive: $isActive,
            birthday: $birthday,
            picture: $picture
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
            birthday,
            picture
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser(
        $id: String!,
    ) {
        deleteUser(
            id: $id,
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
            birthday,
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
    $addressInput: addressInput!,
    $role: String,
    $isActive: String,
    $birthday: String,
    $picture: String,
) {
    updateUser(
        id: $id,
        firstname: $firstname,
        lastname: $lastname,
        email: $email,
        address: $addressInput,
        role: $role,
        isActive: $isActive,
        birthday: $birthday,
        picture: $picture
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
        birthday,
        picture
    }
} 
`