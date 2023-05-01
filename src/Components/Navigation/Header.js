import './header.css';
import {useCallback, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../../Utilities/ThemeContext";
import DarkModeSwitch from "../Buttons/DarkModeSwitch";


const headerTabs = ['All Games', 'Categories', 'Play Online'];
const urls = ['games', 'categories', 'online'];

const Header = ({setTheme}) => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(-1);
    const [selectedTabWidth, setSelectedTabWidth] = useState(0);
    const [selectedTabX, setSelectedTabX] = useState(0);

    const theme = useContext(ThemeContext);

    useEffect(() => {
        const url = window.location.href.split('/');
        const currentSection = url[3];
        const index = urls.indexOf(currentSection);
        if (index === -1) return;
        const tabsElement = document.getElementsByClassName('header-tab');
        setSelectedTab(index);
        setSelectedTabWidth(tabsElement[index].offsetWidth);
        setSelectedTabX(tabsElement[index].getBoundingClientRect().left - tabsElement[index].parentElement.getBoundingClientRect().left);
    }, []);

    const handleClickTab = useCallback((event) => {
        const tabElement = event.target.closest('[data-index]');
        if (!tabElement) return;
        const index = parseInt(tabElement.dataset.index);
        if (isNaN(index) || index < 0 || index >= headerTabs.length) return;
        setSelectedTab(index);
        setSelectedTabWidth(tabElement.offsetWidth);
        setSelectedTabX(tabElement.getBoundingClientRect().left - tabElement.parentElement.getBoundingClientRect().left);
        navigate(urls[index]);
    }, [navigate]);

    const handleDarkMode = (event) => {
        const newTheme = event.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`header ${theme}`}>
            <div className='header-logo' onClick={() => {
                setSelectedTab(-1);
                setSelectedTabWidth(0);
                navigate('/');
            }}>
                <h3>Game On Star</h3>
            </div>
            <div className='header-content'>
                <div className='header-tabs' onClick={handleClickTab}>
                    {
                        headerTabs.map((headerTab, index) =>
                            <div className={`header-tab ${selectedTab === index ? 'selected' : ''}`} key={index}
                                 data-index={index}>
                                <span>{headerTab}</span>
                            </div>
                        )
                    }
                    <div className='header-tab-selected' style={{left: selectedTabX, width: selectedTabWidth}}></div>
                </div>
                <div className='header-controls'>
                    <DarkModeSwitch checked={theme === 'dark'} handler={handleDarkMode}/>
                    <button className='btn btn-primary'>SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
