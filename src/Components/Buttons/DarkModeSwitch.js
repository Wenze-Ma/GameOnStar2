import './buttons.css';

const DarkModeSwitch = ({checked, handler}) => {
    return (
        <div className='darkmode-switch'>
            <input type='checkbox' id='darkmode-input' checked={checked} onChange={handler}/>
            <label htmlFor='darkmode-input'>
                <div className='darkmode-switch-button'></div>
            </label>
        </div>
    );
};

export default DarkModeSwitch;
