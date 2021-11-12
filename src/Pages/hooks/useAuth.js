import { useContext } from 'react';
import { AuthContext } from '../../constext/AuthProvider';

// using context 
const useAuth = () => {
    const auth= useContext(AuthContext);
    return auth;
};

export default useAuth;