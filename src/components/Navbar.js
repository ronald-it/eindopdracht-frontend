import * as React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';
import {NavHashLink} from "react-router-hash-link";

export function Navbar() {
    return (
        <div className="title-and-navbar"><h2 className="page-title">The Clueless Cook</h2>
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
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration">
                            Registration
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
        ;
}