import './ClubIntro.css'
import video from '../videos/newcover.mp4'
import React, { useEffect, useRef } from "react";
import "../../node_modules/video-react/dist/video-react.css";

const ClubIntro = () => {
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
        <div className='club_intro'>
            <video loop muted ref={videoEl} className='cover_video'>
                <source src={video} type="video/mp4" />
            </video>
            <div className='parallelogram'></div>
            <div className='white_blocking'></div>
            <h2 className='club_intro_title'>
                交大創客
            </h2>
            <p className='subtitle'>
                聚焦技術<span>&nbsp;&nbsp;</span>實踐創客精神
            </p>
        </div>
    );
}

export default ClubIntro;

/*
            <h2 className='club_intro_title'>
                關於我們
            </h2>
            <p className='club_intro_text'>
                我們是陽明交大創客俱樂部, 致力於實踐與傳承創客精神;
                <br/>
                學期間開設社課學習新技術, 寒暑假舉辦創客營與黑客松。
                <br/>
                歡迎加入我們，進入創客的世界！
            </p>
            <hr className='separate_line' />
            <img className='club_photo' src={photo} alt="club photo" />
*/