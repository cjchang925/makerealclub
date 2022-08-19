import ClubLogo from "./ClubLogo";
import cover from '../videos/makercamp2022cover.mp4'
import React, { useEffect, useRef } from "react";
import './MakerCamp2022Summer.css'
import BasicProgramming from '../pictures/basicprogramming.png'
import BasicEletronics from '../pictures/basiceletronics.png'
import SuperEletronics from '../pictures/supereletronics.png'
import PlayerProgramming from '../pictures/playerprogramming.png'
import PlayerWelding from '../pictures/welding.png'
import ComputerThinking from '../pictures/computerthinking.png'
import PowerPoint from '../pictures/ppt.png'
import BrainStorming from '../pictures/brainstorming.png'

const MakerCamp2022 = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <div className='maker_camp_2022_summer_outside'>
            <ClubLogo className='club_logo'/>
            <div className="maker_camp_2022_summer">
                <video loop muted ref={videoEl} className='camp_2022_cover_video'>
                    <source src={cover} type="video/mp4" />
                </video>
                <h2 className="maker_camp_2022_summer_title">
                    2022&nbsp;暑假創客電機營
                </h2>
                <p className='maker_camp_2022_summer_subtitle'>
                    2022/8/1~2022/8/4 @陽明交大工程四館
                </p>
            </div>
            <div className="courses">
                <h3 className="courses_title">
                    精心設計的課程
                </h3>
                <img className="basic_programming_picture" src={BasicProgramming} alt='basic programming' />
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/presentation/d/1fDwtjyaFqxmSvoJ5hifxT0ul-0zrm2pm/edit?usp=sharing&ouid=112391521367906534801&rtpof=true&sd=true'>
                    <div className='basic_programming_card'>
                        <p className="basic_programming_link">
                            深入了解
                        </p>
                    </div>
                </a>
                <img className="basic_eletronics_picture" src={BasicEletronics} alt='basic eletronic element' />
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/presentation/d/1oF5VxQ_hRpNgMsrOs7qnzEBLvd1kd6-fWOa12JpaWSI/edit?usp=sharing'>
                    <div className='basic_eletronics_card'>
                        <p className="basic_eletronics_link">
                            深入了解
                        </p>
                    </div>
                </a>
                <img className="super_eletronics_picture" src={SuperEletronics} alt='super eletronic element' />
                <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1mAF4eDXiC6fQGsGtL_bjNzRDi05VOcU2/view?usp=sharing'>
                    <div className='super_eletronics_card'>
                        <p className="super_eletronics_link">
                            深入了解
                        </p>
                    </div>
                </a>
                <img className="player_programming_picture" src={PlayerProgramming} alt='player programming' />
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/presentation/d/1zWpcagpFYUJMn_CjnwFxndxy8K-sgCVG/edit?usp=sharing&ouid=112391521367906534801&rtpof=true&sd=true'>
                    <div className='player_programming_card'>
                        <p className="player_programming_link">
                            深入了解
                        </p>
                    </div>
                </a>
                <img className="player_welding_picture" src={PlayerWelding} alt='player welding' />
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/presentation/d/1FmzACDLzBbn8muYAQe4RaTOJGPma0x9A/edit?usp=sharing&ouid=112391521367906534801&rtpof=true&sd=true'>
                    <div className='player_welding_card'>
                        <p className="player_welding_link">
                            深入了解
                        </p>
                    </div>
                </a>
                <img className="computer_thinking_picture" src={ComputerThinking} alt='player programming' />
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/presentation/d/19WUFhvJEUSJjEWL4weMKrKgvyHGwVdGN/edit?usp=sharing&ouid=112391521367906534801&rtpof=true&sd=true'>
                    <div className='computer_thinking_card'>
                        <p className="computer_thinking_link">
                            深入了解
                        </p>
                    </div>
                </a>
                <img className="ppt_picture" src={PowerPoint} alt='player welding' />
                <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1AFBJ1oe0I3C-O0t2TebwGOWPqH8qyJTC/view?usp=sharing'>
                    <div className='ppt_card'>
                        <p className="ppt_link">
                            深入了解
                        </p>
                    </div>
                </a>
                <img className="brainstorming_picture" src={BrainStorming} alt='player programming' />
                <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1rxl0ZdHy8Q95X8sA7qthHdpA6L6HsFAp/view?usp=sharing'>
                    <div className='brainstorming_card'>
                        <p className="brainstorming_link">
                            深入了解
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default MakerCamp2022;