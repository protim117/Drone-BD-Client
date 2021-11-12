import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../constext/AuthProvider';

const useAuth = () => {
    const auth= useContext(AuthContext);
    return auth;
};

export default useAuth;