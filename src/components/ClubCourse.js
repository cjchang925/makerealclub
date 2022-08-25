import ClubLogo from './ClubLogo'
import ClubCoursePhoto from '../pictures/clubcourse.png'
import './ClubCourse.css'
import gif from '../videos/arrow.gif'
import PlayerPhoto from '../pictures/player.jpg'
import NotionPhoto from '../pictures/notion_course.jpg'
import ClockPhoto from '../pictures/clock.jpg'

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
                    有玩過打磚塊、貪吃蛇等等童年記憶中的遊戲嗎？這堂社課從<br />
                    焊接開始親手做一個遊戲機，也會用程式寫出各種經典遊戲！
                </p>
                <a target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/1ItBZIH88oA2LFxDvveyvrip_FPCoLU1Y'>
                    <div className='player_learn_more_semicircle'>
                        <p className='player_learn_more_text'>
                            深入了解
                        </p>
                    </div>
                </a>
            </div>
            <div className='notion_course'>
                <img src={NotionPhoto} alt='notion' className='notion_photo' />
                <h3 className='notion_title'>
                    Notion&nbsp;基礎入門
                </h3>
                <p className='notion_subtitle'>
                    從零開始教大家如何使用Notion這款超實用的免費排程工具，<br/>
                    全程免費，還有免費模板可以拿！
                </p>
                <a target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/10Aglw4knRVnDi_k2LY3MTiP3SF22Ax_H'>
                    <div className='notion_learn_more_semicircle'>
                        <p className='notion_learn_more_text'>
                            深入了解
                        </p>
                    </div>
                </a>
            </div>
            <div className='clock_course'>
                <img src={ClockPhoto} alt='clock' className='clock_photo' />
                <h3 className='clock_title'>
                    費波那契時鐘
                </h3>
                <p className='clock_subtitle'>
                    看膩了普通的時鐘嗎？這堂社課教大家怎麼做費波那契時鐘，<br/>
                    除了藍紅綠的組合之外，也有其他顏色可以切換！
                </p>
                <a target="_blank" rel="noreferrer" href='https://drive.google.com/drive/folders/1l9tXy4plcEwarhGcmdi57y1ddOBQCGE6'>
                    <div className='clock_learn_more_semicircle'>
                        <p className='clock_learn_more_text'>
                            深入了解
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ClubCourse;