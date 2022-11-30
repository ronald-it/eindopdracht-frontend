import './App.css';
import {Homepage} from "./pages/Homepage/Homepage";
import {Recipepage} from "./pages/Recipepage/Recipepage";
import {Calculator} from "./pages/Calculator/Calculator";
import {Login} from "./pages/Login/Login";
import {Registration} from "./pages/Registration/Registration";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {Navbar} from "./components/Navbar/Navbar";
import './assets/fonts/fonts.css';
import {Footer} from "./components/Footer/Footer";
import {AuthContext} from "./context/AuthContext";
import * as React from 'react';
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";

function App() {
    const {authorization} = React.useContext(AuthContext);

    return (
        <>
            <div className="content-container">
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/recipe/:id">
                        <Recipepage/>
                    </Route>
                    <PrivateRoute path="/calculator" authorization={authorization}>
                        <Calculator />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                </Switch>
            </div>
            <footer className="footer--pin">
                <Footer/>
            </footer>
        </>
    );
}

export default App;
