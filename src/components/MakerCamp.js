import cover from '../pictures/camp_cover.png'
import ClubLogo from './ClubLogo'
import './MakerCamp.css'
import gif from '../videos/arrow.gif'
import campPhoto from '../pictures/2022makercamp.jpg'
import { Link } from 'react-router-dom'

const MakerCamp = () => {
    return (
        <div className='maker_camp'>
            <ClubLogo />
            <div className='maker_camp_title_back'>
                <h2 className='maker_camp_title'>
                    創客營
                </h2>
                <p className='maker_camp_subtitle'>
                    廣招高中好手，擦出絢爛火花
                </p>
            </div>
            <img src={cover} alt='maker camp cover' className='maker_camp_cover' />
            <div className='maker_camp_under_cover'>
                <h2 className='maker_camp_description'>
                    每年寒暑假舉辦。為高中生精心設計，包含24小時黑客松。
                </h2>
                <img src={gif} alt='scroll down' className='camp_scroll_down_gif' />
                <div className='maker_camp_2022'>
                    <Link to="/maker-camp/maker-camp-2022-summer" className='img_link'>
                        <img src={campPhoto} alt='2022 camp' className='camp_photo_2022' />
                    </Link>
                    <h3 className='maker_camp_2022_title'>
                        2022暑假創客電機營
                    </h3>
                    <p className='maker_camp_2022_subtitle'>
                        2022/8/1-2022/8/4 @ 陽明交大
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default MakerCamp;