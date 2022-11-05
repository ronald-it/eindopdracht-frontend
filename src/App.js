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
import {Navbar} from "./components/Navbar";
import './assets/fonts/fonts.css';
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/recipe">
                    <Recipepage/>
                </Route>
                <Route path="/calculator">
                    <Calculator/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/registration">
                    <Registration/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
