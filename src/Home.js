import ClubLogo from "./components/ClubLogo";
import React from "react";
import ClubIntro from "./components/ClubIntro";
import './Home.css'
import UnderCoverThreeIntros from "./components/UnderCover";

const Home = () => {
    return (
        <div className='home'>
            <div className="home_inside">
                <ClubLogo />
                <ClubIntro />
                <UnderCoverThreeIntros />
            </div>
        </div>
    );
};

export default Home;