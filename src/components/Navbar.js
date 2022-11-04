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
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavHashLink to="#outer-container-footer" activeClassName="active-link"
                        >About</NavHashLink>
                    </li>
                    <li>
                        <NavLink to="/calculator" activeClassName="active-link">Calculator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration" exact activeClassName="active-link">Registration</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
        ;
}