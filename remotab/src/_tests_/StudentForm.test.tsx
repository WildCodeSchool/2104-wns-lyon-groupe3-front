  
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor, within } from '@testing-library/react';
import React from 'react';

import StudentForm from '../pages/StudentForm'
import {ALL_USERS} from '../components/Queries'
import Loading from '../components/Loading';


const GET_USERS_SUCCESS_MOCK = {
  request: {
    query: ALL_USERS,
  },
  result: {
    data: {
        allUsers: [
        {
            id: '1',
            firstNameStudent: "toto",
            lastNameStudent: "tata",
            classStudent: 2,
            photoProfil: "",
            nameParent: "toto tata",
            numberParent: "0756445885",
            emailParent: "ddd@ff.fr",
            Adress:{
              id: '2',
              street: "5 rue",
              postalCode: "54789",
              town: "paris"
            }
        },
        {
            id: '2',
            firstNameStudent: "titi",
            lastNameStudent: "tutu",
            classStudent: 2,
            photoProfil: "",
            nameParent: "toto tata",
            numberParent: "0756445885",
            emailParent: "ddd@ff.fr",
            Adress:{
              id: '3',
              street: "5 rue",
              postalCode: "54789",
              town: "paris"
            }
        },
      ],
    },
  },
};

const GET_USERS_ERROR_MOCK = {
  request: {
    query: ALL_USERS,
  },
  error: new Error('Unable to reach server.'),
};

describe('App', () => {
    describe('while fetching wilders', () => {
        it('renders loading', () => {
            render(
                <MockedProvider mocks={[GET_USERS_SUCCESS_MOCK]} addTypename={false}>
                    <Loading/>
                </MockedProvider>
            );

            expect(screen.getByTestId('loading-message')).toBeInTheDocument();
        });

        it('renders error', async () => {
            render(
                <MockedProvider mocks={[GET_USERS_ERROR_MOCK]} addTypename={false}>
                    <StudentForm />
                </MockedProvider>
            );

            const errorMessage = await waitFor(() => screen.getByTestId('error-message'));

            expect(errorMessage).toBeInTheDocument();
        });

        it('should render content', async () => {
            render(
                <MockedProvider mocks={[GET_USERS_SUCCESS_MOCK]} addTypename={false}>
                    <StudentForm />
                </MockedProvider>
            );

            const dataContent = await waitFor(() => screen.getByTestId('content'));

            expect(dataContent).toBeInTheDocument();
        });
    });

    describe('when fetching users succeeded', () => {
        it('renders users', async () => {
          render(
            <MockedProvider mocks={[GET_USERS_SUCCESS_MOCK]} addTypename={false}>
              <StudentForm />
            </MockedProvider>
          );
    
          const list = await waitFor(() => screen.getByTestId('element'));
    
          const listItems = within(list).getByTestId('elementContent');
        //  expect(listItems).toHaveLength(2);
    
          expect(listItems).toHaveTextContent('toto');
         // expect(listItems[1]).toHaveTextContent('titi');
        });
    });
})