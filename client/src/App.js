import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchBooks from "./hoc/SearchBooks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './Resources/css/styles.css'


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={SearchBooks} />
                </Switch>
                <br />
                <Footer />
            </div>
        </Router>
    );
}

export default App;