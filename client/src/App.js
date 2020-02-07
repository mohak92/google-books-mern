import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './Resources/css/styles.css'


function App() {
    return (
        <Router>
            <div>
                <Header />
                <br />
                <Footer />
            </div>
        </Router>
    );
}

export default App;