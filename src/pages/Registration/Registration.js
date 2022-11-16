import * as React from 'react';
import './Registration.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [succes, toggleSucces] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [registrationText, setRegistrationText] = useState('');

    useEffect(() => {
        console.log(username)
    }, [username])
    useEffect(() => {
        console.log(email)
    }, [email])
    useEffect(() => {
        console.log(password)
    }, [password])
    useEffect(() => {
        console.log(role)
    }, [role])

    const postDataRegistration = async () => {
        toggleError(false);
        toggleSucces(false);
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    username: username,
                    email: email,
                    password: password,
                    role: ["user"]
                }
            );
            console.log(response);
            toggleSucces(true);
            setRegistrationText(response.data.message);
        } catch (err) {
            console.log(err.response.data.message);
            toggleError(true);
            setErrorText(err.response.data.message);
        }
    }

    return (
        <>
            <main className="main-registration">
                <h3>Registration</h3>

                <p>You can register an account down below.</p>

                {succes &&
                    <span>
                        {registrationText && <p className="registration-succes">{registrationText}</p>}
                    </span>
                }

                {error &&
                    <span>
                        {error && <p className="registration-error">{errorText}</p>}
                    </span>
                }

                <form
                    id="registration-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        toggleSucces(false);
                        toggleError(false);
                        if (email.includes("@") === true && username.length > 5 && password.length > 5 && role.length > 0) {
                            postDataRegistration();
                        } else {
                            toggleError(true);
                            setErrorText('Your input is invalid. The username and password length must be at least 6 characters and a role must be selected. Also, make sure your e-mail address contains the @ character.')
                        }
                    }
                }
                >

                    <label
                        htmlFor="email"
                    >
                        Email address
                    </label>
                    <input
                        className="email-input"
                        type="text"
                        id="email"
                        name="email-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

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

                    <label
                        htmlFor="password"
                    >
                        Role
                    </label>
                    <select
                        name="role"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p>
                    Do you already have an account? You can login <Link to="/login">here</Link>.
                </p>
            </main>
        </>
    );
}