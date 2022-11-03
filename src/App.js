import './App.css';
import {Homepage} from "./pages/Homepage";
import {Recipepage} from "./pages/Recipepage";
import {Calculator} from "./pages/Calculator";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route exact path="/recipe">
                    <Recipepage/>
                </Route>
                <Route exact path="/calculator">
                    <Calculator/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/registration">
                    <Registration/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
