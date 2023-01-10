import logo from "../pictures/club_logo.png"
import './ClubLogo.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoThreeBars } from 'react-icons/go'

const ClubLogo = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    if (matches) {
        return (
            <div className="club_logo">
                <img style={{ marginLeft: "2vw", height: "4vw", width: "auto" }} src={logo} alt="club_logo" />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className="title">國立陽明交通大學 創客俱樂部</h1>
                </Link>
                <p className="space_word"></p>
                <Link to="/" style={{ textDecoration: 'none', cursor: 'default' }}>
                    <p className="navbar_home">首頁</p>
                </Link>
                <Link to="/maker-camp" style={{ textDecoration: 'none', cursor: 'default' }}>
                    <p className="navbar_maker_camp">創客營</p>
                </Link>
                <Link to="/club-course" style={{ textDecoration: 'none', cursor: 'default' }}>
                    <p className="navbar_club_course">社課</p>
                </Link>
                <Link to="/competition" style={{ textDecoration: 'none', cursor: 'default' }}>
                    <p className="navbar_competition">競賽</p>
                </Link>
                <Link to="/contact-us" style={{ textDecoration: 'none', cursor: 'default' }} >
                    <p className="navbar_contact_us">聯絡我們</p>
                </Link>
            </div>
        );
    }
    else {
        return (
            <div className="club_logo">
                <img className="club_icon" src={logo} alt="club_logo" />
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className="title">國立陽明交通大學 創客俱樂部</h1>
                </Link>
                <button className="bar_icon">
                    <GoThreeBars size={15} style={{height: '25px'}}/>
                </button>
            </div>
        )
    }
    
};

export default ClubLogo;