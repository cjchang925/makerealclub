import './UnderCover.css'
import gif from '../videos/arrow.gif'
import photo from '../pictures/camp_post.jpg'
import coursePhoto from '../pictures/club_course.jpg'
import competitionPhoto from '../pictures/competition.jpg'
import { Link } from "react-router-dom";

const UnderCoverThreeIntros = () => {
    return (
        <div className='under_cover_three_intro'>
            <h2 className="three_intro_title">
                舉辦各種活動，傳承創客精神
            </h2>
            <img src={gif} alt='scroll down' className='home_scroll_down_gif' />
            <img src={photo} alt='camp' className='camp_photo' />
            <Link to="/maker-camp" className='maker_camp_link'>
                <h3 className='first_intro_title'>
                    創客營
                </h3>
            </Link>
            <p className='first_intro_text'>
                每年寒暑假在交大舉辦，為期數天，包含24小時黑客松。
            </p>
            <img src={coursePhoto} alt='course' className='course_photo' />
            <Link to="/club-course">
                <h3 className='second_intro_title'>
                    社課
                </h3>
            </Link>

            <p className='second_intro_text'>
                學期間舉行，鼓勵社員互相交流技術。
            </p>
            <img src={competitionPhoto} alt='competition' className='competition_photo' />
            <Link to="/competition" className='competition_link'>
                <h3 className='third_intro_title'>
                    參加競賽
                </h3>
            </Link>
            <p className='third_intro_text'>
                黑客松、創客松、創創AIoT競賽...無一錯過。
            </p>
        </div>
    );
}

export default UnderCoverThreeIntros;
