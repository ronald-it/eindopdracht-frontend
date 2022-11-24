import * as React from 'react';
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

// Create context
export const AuthContext = React.createContext({});

//Context provider function
export function AuthContextProvider({children}) {

    // Initialize useState of authorization checker
    const [isAuth, toggleIsAuth] = useState({
        authorization: false,
        status: 'pending',
    });

    // Declare history variable to be able to push to other page
    const history = useHistory();

    // useEffect to check for a token in the local storage at every refresh
    useEffect(() => {
            const token = localStorage.getItem('token');
            if (token) {
                toggleIsAuth({
                        authorization: true,
                        status: 'done',
                    }
                )
            } else {
                toggleIsAuth({
                    authorization: false,
                    status: 'done',
                })
            }
        },
        []
    )

    // Login function
    function loginUser(token) {
        localStorage.setItem('token', token);
        toggleIsAuth({
            authorization: true,
            status: 'done',
        });
        history.push('/');
    }

    // Logout function
    function logoutUser() {
        localStorage.removeItem('token');
        toggleIsAuth({
            authorization: false,
            status: 'done',
        });
    }

    // AuthContext provider, an object with the needed functions and states
    const data = {
        authorization: isAuth.authorization,
        toggleAuth: toggleIsAuth,
        userLogin: loginUser,
        userLogout: logoutUser,
    }

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;