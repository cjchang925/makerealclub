import React from 'react';
import Home from './Home';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './components/ContactUs';
import MakerCamp from './components/MakerCamp';
import CopyRight from './components/CopyRight';
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import MakerCamp2022 from './components/MakerCamp2022Summer';
import ClubCourse from './components/ClubCourse';

const App = () => {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/maker-camp" element={<MakerCamp />} />
                    <Route path="/maker-camp/maker-camp-2022-summer" element={<MakerCamp2022 />} />
                    <Route path="/club-course" element={<ClubCourse />} />
                </Routes>
            </Router>
            <CopyRight color='black' className='copy_right_app' />
        </div>
    );
}

export default App;
