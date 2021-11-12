import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Pages/hooks/useFirebase';

export const AuthContext=createContext();
// Creating Context 
const AuthProvider = ({children}) => {
    const allContext=useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;