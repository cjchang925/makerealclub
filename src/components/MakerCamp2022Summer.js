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
import HackathonCover from '../videos/hackathoncover.mp4'
import Team1Work from '../pictures/team1.jpg'
import Team2Work from '../pictures/team2.jpg'
import Team3Work from '../pictures/team3.jpg'
import Team4Work1 from '../pictures/team4-1.png'
import Team4Work2 from '../pictures/team4-2.png'
import Team5Work from '../pictures/team5.png'
import Team6Work from '../videos/team6.mp4'
import Team7Work1 from '../pictures/team7-1.jpg'
import Team7Work2 from '../pictures/team7-2.jpg'
import Team8Work from '../pictures/team8.JPG'
import Team9Work from '../pictures/team9.jpg'
import Team10Work from '../videos/team10.mp4'

const MakerCamp2022 = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    const videoEl2 = useRef(null);

    const attemptPlay2 = () => {
        videoEl2 &&
            videoEl2.current &&
            videoEl2.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    const videoEl3 = useRef(null);

    const attemptPlay3 = () => {
        videoEl3 &&
            videoEl3.current &&
            videoEl3.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    const videoEl4 = useRef(null);

    const attemptPlay4 = () => {
        videoEl4 &&
            videoEl4.current &&
            videoEl4.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
        attemptPlay2();
        attemptPlay3();
        attemptPlay4();
    }, []);

    return (
        <div className='maker_camp_2022_summer_outside'>
            <ClubLogo className='club_logo' />
            <div className="maker_camp_2022_summer">
                <video loop muted ref={videoEl2} className='camp_2022_cover_video'>
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
            <div className="hackathon">
                <video loop muted ref={videoEl3} className='camp_2022_hackathon_cover_video'>
                    <source src={HackathonCover} type="video/mp4" />
                </video>
                <div className="hackathon_title_card"></div>
                <h3 className="hackathon_title">
                    黑客松競賽
                </h3>
                <p className="hackathon_subtitle">
                    8/3 13:00-8/4 13:00
                </p>
                <h3 className="hackathon_demo_title">
                    24小時，從0到1：解決生活中最麻煩的事
                </h3>
                <div className="team1">
                    <h4 className="team1_title">
                        第一小隊：便利公車
                    </h4>
                    <img src={Team1Work} className='team1_photo' alt='team1'/>
                    <p className="team1_subtitle">
                        上下公車時需要打擾其他人相當不方便，因此第一小隊<br />
                        設計便利公車系統協助乘客選擇最適當的座位，另外還<br />
                        有愛的小手提醒睡著的乘客下車。
                    </p>
                </div>
                <div className="team2">
                    <h4 className="team2_title">
                        第二小隊：晚餐選擇機
                    </h4>
                    <img src={Team2Work} className='team2_photo' alt='team2'/>
                    <p className="team2_subtitle">
                        每天最煩惱的事就是：晚餐要吃什麼？因此第二小隊設<br />
                        計晚餐選擇機，使用者輸入餐廳名字後就會隨機選出一<br />
                        間餐廳，同時它還能透過WiFi蒐集即時天氣資訊，協助<br />
                        使用者選出最棒的餐廳。
                    </p>
                </div>
                <div className="team3">
                    <h4 className="team3_title">
                        第三小隊：黑白切
                    </h4>
                    <img src={Team3Work} className='team3_photo' alt='team3'/>
                    <p className="team3_subtitle">
                        正在開心偷玩電腦之際，如果父母突然出現，可能來不<br />
                        及關閉網頁。因此第三小隊設計一種可以偵測距離並在<br />
                        危急時自動關閉網頁的工具，從此可以放心玩電腦了。
                    </p>
                </div>
                <div className="team4">
                    <h4 className="team4_title">
                        第四小隊：地表最強讀書神器
                    </h4>
                    <img src={Team4Work1} className='team4_photo1' alt='team4'/>
                    <img src={Team4Work2} className='team4_photo2' alt='team4'/>
                    <p className="team4_subtitle">
                        讀書時常常不專心，或是坐姿不良影響健康，就靠這台<br />
                        地表最強讀書神器解決！只要坐姿不良或是打瞌睡，就<br />
                        會用蒼蠅拍提醒，直到60分鐘後就可以休息10分鐘。
                    </p>
                </div>
                <div className="team5">
                    <h4 className="team5_title">
                        第五小隊：鞋子去汙神機
                    </h4>
                    <img src={Team5Work} className='team5_photo' alt='team5'/>
                    <p className="team5_subtitle">
                        自己洗鞋子相當麻煩，因此第五小隊設計一台鞋子去汙<br />
                        神機，只要把鞋子放進去就會自動清洗，非常方便。
                    </p>
                </div>
                <div className="team6">
                    <h4 className="team6_title">
                        第六小隊：「傘」避不「雞」
                    </h4>
                    <video loop muted ref={videoEl4} className='team6_video'>
                        <source src={Team6Work} type="video/mp4" />
                    </video>
                    <p className="team6_subtitle">
                        走在路上突然下大雨，忘記帶傘的人就會淋成落湯雞。<br />
                        因此第六小隊做出可以插在書包兩側的雨傘，如果偵測<br />
                        到溼度太高就會自動打開，溼度降低後自動收合。
                    </p>
                </div>
                <div className="team7">
                    <h4 className="team7_title">
                        第七小隊：下雨自動關窗器
                    </h4>
                    <img src={Team7Work1} className='team7_photo1' alt='team7'/>
                    <img src={Team7Work2} className='team7_photo2' alt='team7'/>
                    <p className="team7_subtitle">
                        下雨時，雨水可能從窗戶潑進來，也可能讓曬乾的衣服<br />
                        溼掉。因此第七小隊設計一種可以在下雨時自動關閉窗<br />
                        戶的裝置，也會在出門時提醒我們記得帶傘。
                    </p>
                </div>
                <div className="team8">
                    <h4 className="team8_title">
                        第八小隊：有夠消蟑
                    </h4>
                    <img src={Team8Work} className='team8_photo' alt='team8'/>
                    <p className="team8_subtitle">
                        遇到蟑螂時，我們常常驚慌失措。因此第八小隊設計出<br />
                        可以遙控投放殺蟑藥的小車，利用藍芽和手機連線，讓<br />
                        消蟑變得輕鬆寫意。
                    </p>
                </div>
                <div className="team9">
                    <h4 className="team9_title">
                        第九小隊：高科技鬧鐘
                    </h4>
                    <img src={Team9Work} className='team9_photo' alt='team9'/>
                    <p className="team9_subtitle">
                        睡著時，我們可能沒聽到鬧鐘，或是關掉後繼續賴床，<br />
                        導致一天的計畫拖延。因此第九小隊設計高科技鬧鐘，<br />
                        日出時就會物理性喚醒我們，也可以透過藍芽遙控。
                    </p>
                </div>
                <div className="team10">
                    <h4 className="team10_title">
                        第十小隊：自動飲水機
                    </h4>
                    <video loop muted ref={videoEl} className='team10_video'>
                        <source src={Team10Work} type="video/mp4" />
                    </video>
                    <p className="team10_subtitle">
                        第十小隊認為裝水需要按壓按鈕相當麻煩，因此設計出<br />
                        自動飲水機，只要將水壺放到飲水機前就會自動出水，<br />
                        也會根據室溫選擇倒出冰水或溫水。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MakerCamp2022;