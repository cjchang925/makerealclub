import './CopyRight.css'
import copyrighticon from '../pictures/copyright.png'

const CopyRight = (props) => {
    return (
        <div className='copy_right'>
            <img src={copyrighticon} alt='icon' className='copy_right_icon' />
            <p className='copy_right_text' style={{color: props.color}}>
                &nbsp;2022 NYCU Makereal Labs
            </p>
        </div>
    );
}

export default CopyRight;
