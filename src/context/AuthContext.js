import * as React from 'react';
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = React.createContext({});

export function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState({
        authorization: false,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
            const token = localStorage.getItem('token');
            console.log(token);
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

    function loginUser(token) {
        console.log("Gebruiker is ingelogd");
        localStorage.setItem('token', token);
        toggleIsAuth({
            authorization: true,
            status: 'done',
        });
        history.push('/');
    }

    function logoutUser() {
        localStorage.removeItem('token');
        console.log("Gebruiker is uitgelogd");
        toggleIsAuth({
            authorization: false,
            status: 'done',
        });
    }

    const data = {
        authorization: isAuth.authorization,
        toggleAuth: toggleIsAuth,
        userLogin: loginUser,
        userLogout: logoutUser,
    }

    useEffect(() => {
        console.log(isAuth.authorization)
    }, [isAuth.authorization])

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;