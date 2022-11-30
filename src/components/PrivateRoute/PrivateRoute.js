import * as React from 'react';
import {Route} from "react-router-dom";
import './PrivateRoute.css';

export function PrivateRoute({authorization , children, ...rest}) {
    return (
        <Route {...rest}>
            {authorization === true ? children : <div className="div-private-route">
                <p className="text-align-private-route">
                This content is only available for logged in users.
                </p>
            </div>
            }
        </Route>
    );
}