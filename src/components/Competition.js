import './Competition.css'
import ClubLogo from './ClubLogo';
import CompetitionCover from '../pictures/competition.png'
import gif from '../videos/arrow.gif'
import CPRPhoto from '../pictures/cpr.png'
import ChiaoTsingLA from '../pictures/mask.jpg'
import Cushion from '../pictures/cushion.jpg'

const Competition = () => {
    return (
        <div className='competition'>
            <ClubLogo />
            <div className='competition_cover'>
                <img className='competition_cover_photo' src={CompetitionCover} alt='competition' />
                <h2 className='competition_title'>
                    參加競賽
                </h2>
                <p className='competition_subtitle'>
                    凝聚創客高手，挑戰自我極限
                </p>
            </div>
            <div className='competition_under_cover'>
                <h3 className='competition_description'>
                    參加黑客松、創客松等等競賽，無一錯過。
                </h3>
                <img src={gif} alt='scroll down' className='competition_scroll_down_gif' />
            </div>
            <div className='cpr'>
                <img src={CPRPhoto} alt='cpr' className='cpr_photo' />
                <h3 className='cpr_title'>
                    Keep Your Brain SHARK
                </h3>
                <h4 className='cpr_subtitle'>
                    音樂導向CPR練習
                </h4>
                <p className='cpr_text'>
                    在生命之鏈中CPR急救技術是極為重要的一環，這套系統包含<br/>
                    隨時隨地練習CPR節奏，CPR知識問答遊戲等等，協助使用者<br/>
                    更熟悉CPR，增加緊急時勇於實施CPR的勇氣。
                </p>
                <h4 className='cpr_award'>
                    榮獲AIoT感測物聯系統應用創意競賽金獎！
                </h4>
            </div>
            <div className='chiao_tsing_LA'>
                <img src={ChiaoTsingLA} alt='ctla' className='ctLA_photo' />
                <h3 className='ctLA_title'>
                    口罩監督機器人
                </h3>
                <p className='ctLA_text'>
                    作品整合影像、口罩炮塔以及馬達控制、遠端連線、深度學習<br/>
                    等等技術，以達成防疫、健康照護的目標。
                </p>
                <h4 className='ctLA_award'>
                    榮獲2022新思科技ARC盃AIoT設計應用競賽佳作！
                </h4>
            </div>
            <div className='cushion'>
                <img src={Cushion} alt='cushion' className='cushion_photo' />
                <h3 className='cushion_title'>
                    智慧調整坐姿椅墊
                </h3>
                <p className='cushion_text'>
                    使用樹梅派與ARC EM9D進行坐姿判斷，採用TensorFlow訓<br/>
                    練模型，做出便利又舒適的椅墊，還會提醒使用者改變坐姿。
                </p>
                <h4 className='cushion_award'>
                    榮獲2022新思科技ARC盃AIoT設計應用競賽企業獎！
                </h4>
            </div>
        </div>
    );
}

export default Competition;