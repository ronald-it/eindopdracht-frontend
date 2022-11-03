import * as React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <div class="title-and-navbar"><h2 class="page-title">The Clueless Cook</h2>
            <nav>
                <ul class="ul-header">
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/calculator" exact activeClassName="active-link">Calculator</NavLink>
                </li>
                    <li>
                        <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/registration" exact activeClassName="active-link">Registration</NavLink>
                    </li>
            </ul>
        </nav>
</div>
)
    ;
};