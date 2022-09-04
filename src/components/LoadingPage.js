import './LoadingPage.css'
import PropagateLoader from "react-spinners/PropagateLoader";

const LoadingPage = () => {
    return (
        <div className='loading_page'>
            <h2 className='loading_title'>
                歡迎來到交大創客！
            </h2>
            <PropagateLoader cssOverride={{}} color={'orange'} style={{position: 'absolute', top: '55vh', zIndex: '200' }}/>
        </div>
    )
}

export default LoadingPage;