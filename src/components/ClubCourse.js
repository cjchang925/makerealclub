import ClubLogo from './ClubLogo'
import ClubCoursePhoto from '../pictures/clubcourse.png'
import './ClubCourse.css'
import gif from '../videos/arrow.gif'
import PlayerPhoto from '../pictures/player.jpg'

const ClubCourse = () => {
    return (
        <div className='club_course_whole_page'>
            <ClubLogo />
            <div className='cover'>
                <img className='cover_photo' src={ClubCoursePhoto} alt='cover' />
                <h2 className='cover_title'>
                    社團課程
                </h2>
                <p className='cover_subtitle'>
                    成員共同研討，交流頂尖技術
                </p>
            </div>
            <div className='under_cover'>
                <h2 className='description'>
                    學期間舉行，鼓勵成員互相交流技術。
                </h2>
                <img src={gif} alt='scroll down' className='scroll_down_gif' />
            </div>
            <div className='player_course'>
                <img src={PlayerPhoto} alt='player' className='player_photo' />
                <h3 className='player_title'>
                    遊戲機
                </h3>
                <p className='player_subtitle'>
                    有玩過打磚塊、貪吃蛇等等童年記憶中的遊戲嗎？這堂社課要從<br />
                    焊接開始親手做一個遊戲機，也會用程式寫出各種經典遊戲！
                </p>
                <a target="_blank" rel="noreferrer" href='https://docs.google.com/document/d/1gPrwREAECwLcZ0HEXO67aM1wAXNvfYbn/edit?usp=sharing&ouid=103210220110470786004&rtpof=true&sd=true'>
                    <div className='learn_more_semicircle'>
                        <p className='learn_more_text'>
                            深入了解
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ClubCourse;