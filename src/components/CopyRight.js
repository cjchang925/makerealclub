import { FaRegCopyright } from 'react-icons/fa'
import { useEffect, useState } from "react";
import './CopyRight.css'
const CopyRight = (props) => {
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
        <div className='copy_right'>
            <FaRegCopyright size={windowSize.innerWidth * 0.01} className='copy_right_icon' style={{color: props.color}}/>
            <p className='copy_right_text' style={{color: props.color}}>
                2022 NYCU Make Real Club
            </p>
        </div>
    );
}

export default CopyRight;

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}