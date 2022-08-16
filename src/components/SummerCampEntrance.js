import photo from '../pictures/maker_camp_photo.JPG'
import './SummerCampEntrance.css'
import CopyRight from './CopyRight';

const SummerCampEntrance = () => {
    return (
        <div className='summer_camp_entrance'>
            <h2 className='summer_camp_title'>
                2022 暑假創客電機營
            </h2>
            
            <img className='summer_camp_photo' src={photo} alt="summer camp photo" />
            <CopyRight className='copy_right_component' color='white'/>
        </div>
    );
};

export default SummerCampEntrance;

/*
            <p className='summer_camp_text'>
                今年盛夏, 我們與40位學員相約於交大, 進行四天三夜的
                <br />
                創客營, 包含電機基礎知識、運算思維、遊戲機焊接實作
                <br />
                等等課程, 也進行24小時黑客松競賽, 讓學員們滿載而歸。
            </p>
            <hr className='separate_line_summer_camp' />
*/