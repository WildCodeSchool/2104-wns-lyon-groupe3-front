
import React, {createContext} from 'react';

export interface AppContextInterface {
    newData: any;
    flag: boolean;
    setFlag: any;
    errorFirstname: boolean;
    setErrorFirstname: any;
    errorLastname: boolean;
    setErrorLastname: any;
    errorEmail: boolean;
    setErrorEmail: any;
    errorPhoneNumberProf: boolean;
    setErrorPhoneNumberProf: any;
    errorStreet: boolean;
    setErrorStreet: any;
    errorPostalCode: boolean;
    setErrorPostalCode: any;
    errorCity: boolean;
    setErrorCity: any;
    fileSelected: any;
    setFileSelected: any;
    refetch: any;
    firstname: string;
    setFirstname: any;
    lastname: string;
    setLastname: any;
    role: string;
    setRole: any;
    email: string;
    setEmail: any;
    phoneNumberProf: string;
    setPhoneNumberProf: any;
    street: string;
    setStreet: any;
    postalCode: string;
    setPostalCode: any;
    city: string;
    setCity: any;
  }


export const UserContext = createContext<AppContextInterface | any >(null);

