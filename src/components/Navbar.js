import * as React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Navbar.css';
import {NavHashLink} from "react-router-hash-link";
import {AuthContext} from "../context/AuthContext";

export function Navbar() {
    const {authorization, userLogout} = React.useContext(AuthContext);

    return (
        <div className="title-and-navbar">
            <Link className="clueless-cook-link" to="/">
                <h2 className="page-title">The Clueless Cook</h2>
            </Link>
            <nav>
                <ul className="ul-header">
                    <li>
                        <NavLink to="/" exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavHashLink to="#outer-container-footer">
                            About
                        </NavHashLink>
                    </li>
                    <li>
                        <NavLink to="/calculator">
                            Calculator
                        </NavLink>
                    </li>
                    {authorization === false && <li>
                        <NavLink to="/login"
                        >
                            Log in
                        </NavLink>
                    </li>}
                    {authorization === true && <li>
                        <NavLink to="/" exact
                                 onClick={() => userLogout}
                        >
                            Log out
                        </NavLink>
                    </li>}
                    {authorization === false && <li>
                        <NavLink to="/registration"
                        >
                            Register
                        </NavLink>
                    </li>}
                </ul>
            </nav>
        </div>
    )
        ;
}