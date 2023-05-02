import './buttons.css';

const DarkModeSwitch = ({checked, handler}) => {
    return (
        <div className='darkmode-switch'>
            <input type='checkbox' id='darkmode-input' checked={checked} onChange={handler}/>
            <label htmlFor='darkmode-input'>
                <div className='darkmode-switch-button'>
                    <div className='crater'></div>
                    <div className='crater'></div>
                    <div className='crater'></div>
                </div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='star'></div>
                <div className='cloud'></div>
                <div className='cloud'></div>
            </label>
        </div>
    );
};

export default DarkModeSwitch;
