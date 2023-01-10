import ClubLogo from "./ClubLogo";
import './ContactUs.css';
import { HiOutlineMail } from 'react-icons/hi'
import { useEffect, useState } from "react";

const ContactUs = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className='contact_us'>
            <ClubLogo />
            <div className='inside_contact'>
                <p className='location_title'>
                    俱樂部總部
                </p>
                <p className='location_address'>
                    300093 新竹市東區大學路1001號 工程四館 417室
                </p>
                <a className="club_email_link" target="_blank" rel="noreferrer" href='mailto: makereallabsnctu@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='club_email_icon' />
                    <p className='club_email'>
                        makereallabsnctu@gmail.com
                    </p>
                </a>
                <iframe className="ED_google_map" title='NYCU_ED' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38681.97595020033!2d120.97740893772944!3d24.783728290876198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468360f99028df7%3A0x642392a8d294e075!2z6Zm95piO5Lqk6YCa5aSn5a245bel56iL5Zub6aSo!5e0!3m2!1szh-TW!2stw!4v1660239042269!5m2!1szh-TW!2stw" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact_people">
                <p className="chairperson_title">
                    社長
                </p>
                <hr className='chairperson_separate_line' />
                <p className="chairperson_name">
                    曾子薰
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: hsun.c@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='chairperson_email_icon' />
                    <p className="chairperson_email">
                        hsun.c@nycu.edu.tw
                    </p>
                </a>
                {/*}
                <FaPhoneAlt size={windowSize.innerWidth * 0.016} className='chairperson_phone_icon' />
                <p className="chairperson_phone">
                    0970-501235
                </p>
                */}
                <p className="internet_manager_title">
                    網頁長
                </p>
                <hr className='internet_manager_separate_line' />
                <p className="internet_manager_name">
                    張棋鈞
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: chijun.ee10@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='internet_manager_email_icon' />
                    <p className="internet_manager_email">
                        chijun.ee10@nycu.edu.tw
                    </p>
                </a>
                {/*
                <FaPhoneAlt size={windowSize.innerWidth * 0.016} className='internet_manager_phone_icon' />
                <p className="internet_manager_phone">
                    0972-747256
                </p>
                */}
                <p className="teaching_leader_title">
                    教學長
                </p>
                <hr className='teaching_leader_separate_line' />
                <p className="teaching_leader_name">
                    邱俊瑋
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: williamchiu.ee10@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader_email_icon' />
                    <p className="teaching_leader_email">
                        williamchiu.ee10@nycu.edu.tw
                    </p>
                </a>
                <p className="teaching_leader2_name">
                    林佑儒
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: danny92419@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader2_email_icon' />
                    <p className="teaching_leader2_email">
                        danny92419@gmail.com
                    </p>
                </a>
                <p className="teaching_leader3_name">
                    徐培哲
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: 25425108a@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader3_email_icon' />
                    <p className="teaching_leader3_email">
                        25425108a@gmail.com
                    </p>
                </a>
                <p className="PR_title">
                    公關
                </p>
                <hr className='PR_separate_line' />
                <p className="PR_name">
                    蔡雅婷
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: yating2357.ee10@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='PR_email_icon' />
                    <p className="PR_email">
                        yating2357.ee10@nycu.edu.tw
                    </p>
                </a>
                <p className="PR2_name">
                    楊千芊
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: vivia700018.c@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='PR2_email_icon' />
                    <p className="PR2_email">
                        vivia700018.c@nycu.edu.tw
                    </p>
                </a>
                <p className="PR3_name">
                    李博安
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: gahxi0769.ee10@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='PR3_email_icon' />
                    <p className="PR3_email">
                        gahxi0769.ee10@nycu.edu.tw
                    </p>
                </a>
                <p className="AD_title">
                    美宣
                </p>
                <hr className='AD_separate_line' />
                <p className="AD_name">
                    林詩軒
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: heidi10321@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='AD_email_icon' />
                    <p className="AD_email">
                        heidi10321@gmail.com
                    </p>
                </a>
                <p className="doc_title">
                    文書
                </p>
                <hr className='doc_separate_line' />
                <p className="doc_name">
                    許家綺
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: c109700019.mg09@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='doc_email_icon' />
                    <p className="doc_email">
                        c109700019.mg09@nycu.edu.tw
                    </p>
                </a>
                <p className="GA_title">
                    總務
                </p>
                <hr className='GA_separate_line' />
                <p className="GA_name">
                    謝佳蓁
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: alina23163878@gmail.com'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='GA_email_icon' />
                    <p className="GA_email">
                        alina23163878@gmail.com
                    </p>
                </a>
                <p className="GA2_name">
                    胡珩秀
                </p>
                <a target="_blank" rel="noreferrer" href='mailto: derekpigg.ee10@nycu.edu.tw'>
                    <HiOutlineMail size={windowSize.innerWidth * 0.021} className='GA2_email_icon' />
                    <p className="GA2_email">
                        derekpigg.ee10@nycu.edu.tw
                    </p>
                </a>
            </div>
        </div >
    );
}

export default ContactUs;

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

/*
                <h2 className='contact_title'>
                    聯絡我們
                </h2>
*/