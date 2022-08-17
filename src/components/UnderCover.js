import './UnderCover.css'
import gif from '../videos/arrow.gif'
import photo from '../pictures/camp_post.jpg'
import coursePhoto from '../pictures/club_course.jpg'
import competitionPhoto from '../pictures/competition.jpg'

const UnderCoverThreeIntros = () => {
    return (
        <div className='under_cover_three_intro'>
            <h2 className="three_intro_title">
                舉辦各種活動，傳承創客精神
            </h2>
            <img src={gif} alt='scroll down' className='scroll_down_gif' />
            <img src={photo} alt='camp photo' className='camp_photo' />
            <h3 className='first_intro_title'>
                創客營
            </h3>
            <p className='first_intro_text'>
                每年寒暑假在交大舉辦，為期數天，包含24小時黑客松。
            </p>
            <img src={coursePhoto} alt='course photo' className='course_photo' />
            <h3 className='second_intro_title'>
                社課
            </h3>
            <p className='second_intro_text'>
                學期間舉行，鼓勵社員互相交流技術。
            </p>
            <img src={competitionPhoto} alt='competition photo' className='competition_photo' />
            <h3 className='third_intro_title'>
                參加競賽
            </h3>
            <p className='third_intro_text'>
                黑客松、創客松、創創AIoT競賽...無一錯過。
            </p>
        </div>
    );
}

export default UnderCoverThreeIntros;
