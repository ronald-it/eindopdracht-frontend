import * as React from 'react';
import './Login.css';
import {Link} from "react-router-dom";

export function Login() {
    return (
        <>
            <main className="main-login">
                <h3>Login</h3>

                <p>You can log into your account down below</p>

                    <form id="login-form">

                        <label
                            htmlFor="email"
                        >
                            Email address
                        </label>
                        <input className="email-input" type="text" id="email" name="email-field"
                        />

                        <label
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input className="password-input" type="text" id="password" name="password-field"
                        />

                        <button>
                            Login
                        </button>

                    </form>

                <p>Do you not have an account yet? Register <Link to="/registration">here</Link>.</p>
            </main>
        </>
    );
}