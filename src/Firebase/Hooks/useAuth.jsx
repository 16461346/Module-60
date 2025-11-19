import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const useAuth = () => {
    const Authinfo=use(AuthContext)
    return Authinfo;
};

export default useAuth;