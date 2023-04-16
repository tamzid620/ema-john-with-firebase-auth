import React, { Children, createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({Children}) => {
    const user = {displayName: 'Al Katra'}
    const authInfo =  {
        user, 

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;