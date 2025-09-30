import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css";

import bright from '../../Media/Nav.Media/bright.png'
import dark from '../../Media/Nav.Media/dark.png'
import settings from '../../Media/Nav.Media/settings.png'
import logo from '../../Media/Nav.Media/logo.png'

function Nav() {
    const [isResponsiveNavOpen, setIsResponsiveNavOpen] = useState(false);
    // const [isLightMode, setIsLightMode] = useState(() => {
    //     return localStorage.getItem('lightMode') === 'true';
    // });

    // useEffect(() => {
    //     document.body.classList.toggle('light-mode', isLightMode);
    // }, [isLightMode]);

    // const toggleMode = () => {
    //     const newMode = !isLightMode;
    //     setIsLightMode(newMode);
    //     localStorage.setItem('lightMode', newMode);
    // };

    const toggleResponsiveNav = () => {
        setIsResponsiveNavOpen(!isResponsiveNavOpen);
    };

    // const [showChatbot, setShowChatbot] = React.useState(false);

    return (
        <nav>
            <NavLink
                to='/' 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='brand-link'
            >
                <div className='nav-logo-image-container'><img className="nav-logo-image" src={logo} alt="iBulk Logo" /></div>
            </NavLink>
            <div className="nav-links-container">
                <NavLink 
                    to='/' 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/Programs' 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                    Programs
                </NavLink>
                <NavLink  
                    to='/Exercises'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                    Exercises
                </NavLink>
                <NavLink  
                    to='/Nutrition'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                    Nutrition
                </NavLink>
                <NavLink
                    to='/Services' 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                    Services
                </NavLink>
                <NavLink  
                    to='/About' 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                    About
                </NavLink>
            </div>

            <div className="nav-settings">
                <div className="settings">
                    <img className="nav-icons brightness-icon" src={dark} alt="Dark Mode" />
                    <img className="nav-icons settings-icon" src={settings} alt="Settings" />
                </div>
                <button className="nav-sign-button">Sign in</button>
            </div>

            <div 
                onClick={toggleResponsiveNav}
                className='menu-lines-container'
            >
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>

            <div 
                className="responsive-nav"
                style={{ display: isResponsiveNavOpen ? 'flex' : 'none' }}
            >
                <div className="responsive-nav-head">
                    <img className="responsive-nav-logo" src={logo} alt="iBulk Logo" />
                    <i onClick={toggleResponsiveNav} className='nav-close-icon fa fa-times'></i>
                </div>
                <div className="responsive-nav-links-container">
                    <div className="responve-nav-links-row">
                        <NavLink
                            to='/Home' 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                            className={({ isActive }) => isActive ? 'responsive-nav-link active-link' : 'nav-link'}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/Programs' 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                            className={({ isActive }) => isActive ? 'responsive-nav-link active-link' : 'nav-link'}
                        >
                            Programs
                        </NavLink>
                    </div>
                    <div className="responve-nav-links-row">
                        <NavLink
                            to='/Exercises' 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                            className={({ isActive }) => isActive ? 'responsive-nav-link active-link' : 'nav-link'}
                        >
                            Exercises
                        </NavLink>
                        <NavLink
                            to='/Nutrition' 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                            className={({ isActive }) => isActive ? 'responsive-nav-link active-link' : 'nav-link'}
                        >
                            Nutrition
                        </NavLink>
                    </div>
                    <div className="responve-nav-links-row">
                        <NavLink
                            to='/Services' 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                            className={({ isActive }) => isActive ? 'responsive-nav-link active-link' : 'nav-link'}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to='/About' 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                            className={({ isActive }) => isActive ? 'responsive-nav-link active-link' : 'nav-link'}
                        >
                            About
                        </NavLink>
                    </div>
                </div>
                <div className="responsive-nav-tail">
                    <div className="responsive-nav-settings-container">
                        <img className="responsive-nav-icons" src={bright} alt="Brightness" />
                        <img className="responsive-nav-icons" src={settings} alt="Settings" />
                    </div>
                    <button className="responsive-nav-button">Sign in</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;