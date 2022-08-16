import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './components/ContactUs';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact_us" element={<ContactUs />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
