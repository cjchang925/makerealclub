import './CopyRight.css'
import copyrighticon from '../pictures/copyright.png'

const CopyRight = (props) => {
    return (
        <div className='copy_right'>
            <img src={copyrighticon} alt='icon' className='copy_right_icon' />
            <p className='copy_right_text' style={{color: props.color}}>
                &nbsp;2023 NYCU Makereal Labs&nbsp;|&nbsp;Developed by <a href='https://github.com/cjchang925' rel="noreferrer" target="_blank">Chi-chun Chang</a> and <a href='https://github.com/CaiCian' rel="noreferrer" target="_blank">Cai-cian Chuang</a>
            </p>
        </div>
    );
}

export default CopyRight;
