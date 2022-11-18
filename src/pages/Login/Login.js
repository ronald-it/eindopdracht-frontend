import * as React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

export function Login() {

    const {userLogin} = React.useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);

    useEffect(() => {
        console.log(username)
    }, [username])
    useEffect(() => {
        console.log(password)
    }, [password])

    const postDataLogin = async () => {
        toggleError(false);
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    username: username,
                    password: password,
                }
            );
            console.log(response);
            console.log(response.data.accessToken);
            userLogin(response.data.accessToken);
        } catch (err) {
            console.log(err.response.data.message);
            toggleError(true);
        }
    }

    return (
        <>
            <main className="main-login">
                <h3>Login</h3>

                <p>You can log into your account down below</p>

                <form
                    id="login-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        toggleError(false);
                        postDataLogin();
                        console.log("hello");
                        }
                    }
                >

                    <label
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="username-input"
                        type="text"
                        id="username"
                        name="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="password-input"
                        type="text"
                        id="password"
                        name="password-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p>Do you not have an account yet? Register <Link to="/registration">here</Link>.</p>
            </main>
        </>
    );
}