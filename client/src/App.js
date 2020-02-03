import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/Footer";
import './Resources/css/styles.css'
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <div>
                <Header />
                Google Books!
                <Footer />
            </div>
        </Router>
    );
}

export default App;