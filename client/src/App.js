import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBooks from './pages/SearchBooks';
import SaveBooks from './pages/SaveBooks';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './Resources/css/styles.css'


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<SearchBooks />}  exact />
                    <Route path="/saved" element={<SaveBooks />}  exact />
                </Routes>
                <br />
                <Footer />
            </div>
        </Router>
    );
}

export default App;