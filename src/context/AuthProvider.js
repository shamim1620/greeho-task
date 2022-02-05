import React, { createContext } from 'react';
import useHooks from '../hooks/useHooks';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContext = useHooks();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {
                    children
                }

            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;