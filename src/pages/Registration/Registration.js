import * as React from 'react';
import './Registration.css';
import {Link} from "react-router-dom";

export function Registration() {
    return (
        <>
            <main className="main-registration">
                <h3>Registration</h3>

                <p>You can register an account down below.</p>

                <form id="registration-form">

                    <label
                        htmlFor="email"
                    >
                        Email address
                    </label>
                    <input className="email-input" type="text" id="email" name="email-field"
                    />

                    <label
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input className="username-input" type="text" id="username" name="username-field"
                    />

                    <label
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input className="password-input" type="text" id="password" name="password-field"
                    />

                    <button>
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