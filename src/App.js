import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './components/ContactUs';
import MakerCamp from './components/MakerCamp';
import CopyRight from './components/CopyRight';
import './App.css'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact_us" element={<ContactUs />} />
                    <Route path="/maker_camp" element={<MakerCamp />} />
                </Routes>
            </Router>
            <CopyRight color='black' className='copy_right_app'/>
        </div>
    );
}

export default App;
