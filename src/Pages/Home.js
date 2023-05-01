import groundImg from '../Resources/ground.png';
import star1 from '../Resources/star1.png';
import star2 from '../Resources/star2.png';
import star3 from '../Resources/star3.png';
import star4 from '../Resources/star4.png';
import {useEffect, useState} from "react";
import './pages.css';

const Home = () => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const mouseListener = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        };
        window.addEventListener('mousemove', mouseListener);
        return () => {
            window.removeEventListener('mousemove', mouseListener);
        };
    }, []);

    return (
        <div className='home'>
            <div style={{bottom: 0}}>
                <img src={groundImg} alt='' width='100%' height='100%'/>
            </div>
            <div style={{
                top: `calc(-${mousePosition.y}px / 20 + var(--star1-top))`,
                left: `calc(-${mousePosition.x}px / 20 + var(--star1-left))`,
                width: 'var(--star1-width)',
                aspectRatio: '23/14'
            }}>
                <img src={star1} alt='' width='100%' height='100%'/>
            </div>
            <div style={{
                top: `calc(-${mousePosition.y}px / 11 + var(--star2-top))`,
                left: `calc(-${mousePosition.x}px / 11 + var(--star2-left))`,
                width: 'var(--star2-width)',
                aspectRatio: '243/250'
            }}>
                <img src={star2} alt='' width='100%' height='100%'/>
            </div>
            <div style={{
                top: `calc(-${mousePosition.y}px / 6 + var(--star3-top))`,
                left: `calc(-${mousePosition.x}px / 6 + var(--star3-left))`,
                width: 'var(--star3-width)',
                aspectRatio: '263/272'
            }}>
                <img src={star3} alt='' width='100%' height='100%'/>
            </div>
            <div style={{
                top: `calc(-${mousePosition.y}px / 25 + var(--star4-top))`,
                right: `calc(${mousePosition.x}px / 25 + var(--star4-right))`,
                width: 'var(--star4-width)',
                aspectRatio: '163/78'
            }}>
                <img src={star4} alt='' width='100%' height='100%'/>
            </div>
            <div className='home-title'>
                <p>GAME ON STAR</p>
            </div>
        </div>
    );
};

export default Home;
