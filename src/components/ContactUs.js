import ClubLogo from "./ClubLogo";
import './ContactUs.css';
import { HiOutlineMail } from 'react-icons/hi'
import { useEffect, useState } from "react";
import CopyRight from "./CopyRight";

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
                <HiOutlineMail size={windowSize.innerWidth * 0.021} className='club_email_icon' />
                <p className='club_email'>
                    makereallabsnctu@gmail.com
                </p>
                <iframe className="ED_google_map" title='NYCU_ED' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38681.97595020033!2d120.97740893772944!3d24.783728290876198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468360f99028df7%3A0x642392a8d294e075!2z6Zm95piO5Lqk6YCa5aSn5a245bel56iL5Zub6aSo!5e0!3m2!1szh-TW!2stw!4v1660239042269!5m2!1szh-TW!2stw" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact_people">
                <p className="chairperson_title">
                    社長
                </p>
                <hr className='chairperson_separate_line' />
                <p className="chairperson_name">
                    曾子薰
                </p>
                <HiOutlineMail size={windowSize.innerWidth * 0.021} className='chairperson_email_icon' />
                <p className="chairperson_email">
                    hsun.c@nycu.edu.tw
                </p>
                {/*}
                <FaPhoneAlt size={windowSize.innerWidth * 0.016} className='chairperson_phone_icon' />
                <p className="chairperson_phone">
                    0970-501235
                </p>
                */}
                <p className="internet_manager_title">
                    網頁管理
                </p>
                <hr className='internet_manager_separate_line' />
                <p className="internet_manager_name">
                    張棋鈞
                </p>
                <HiOutlineMail size={windowSize.innerWidth * 0.021} className='internet_manager_email_icon' />
                <p className="internet_manager_email">
                    chijun.ee10@nycu.edu.tw
                </p>
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
                <HiOutlineMail size={windowSize.innerWidth * 0.021} className='teaching_leader_email_icon' />
                <p className="teaching_leader_email">
                    williamchiu.ee10@nycu.edu.tw
                </p>
                <p className="PR_title">
                    公關
                </p>
                <hr className='PR_separate_line' />
                <p className="PR_name">
                    蔡雅婷
                </p>
                <HiOutlineMail size={windowSize.innerWidth * 0.021} className='PR_email_icon' />
                <p className="PR_email">
                    yating2357.ee10@nycu.edu.tw
                </p>
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