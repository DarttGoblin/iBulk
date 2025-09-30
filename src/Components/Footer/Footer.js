import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

import white from "../../Media/Footer.Media/white.jpg";
import red from "../../Media/Footer.Media/red.jpg";

function Footer() {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {setToggle((prev) => !prev);}, 500);
        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <footer>
            <div className="footer-first-part">
                <img
                    className="footer-logo"
                    src={toggle ? white : red}
                    alt="iBulk Logo"
                />
            </div>

            <div className="footer-second-part">
                <div className="footer-text-container">
                <span
                    className="footer-title"
                    style={{ color: toggle ? "rgb(140, 0, 0)" : "rgb(255, 255, 255)" }}
                >
                    iBulk
                </span>
                <span className="footer-description">
                    iBulk is your virtual gym buddy, packed with exercises, tips, and tutorials to help you lift smarter, 
                    not just heavier. From bodybuilding wisdom to fitness hacks, we've got the reps, sets, and even the 
                    occasional dad joke covered. Flex your curiosity, not just your biceps.
                </span>
                </div>

                <div className="footer-icons-container">
                <i className="fa-brands fa-twitter footer-icon"></i>
                <i className="fa-brands fa-facebook footer-icon"></i>
                <i className="fa-brands fa-instagram footer-icon"></i>
                </div>

                <div className="footer-nav-links-container">
                    <NavLink 
                        to='./Home'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="footer-nav-link" href="Home.html"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='./Programs'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="footer-nav-link"   
                    >
                        Programs
                    </NavLink>
                    <NavLink
                        to='./Exercices'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="footer-nav-link"
                    >
                        Exercices
                    </NavLink>
                    <NavLink
                        to='./Nutrition'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="footer-nav-link"
                    >
                        Nutrition
                    </NavLink>
                    <NavLink
                        to='./Services'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="footer-nav-link"
                    >
                        Services
                    </NavLink>
                    <NavLink 
                        to='./About'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="footer-nav-link"
                    > 
                        About
                    </NavLink>
                </div>

                <div className="footer-credits-container">
                <button className="feedback">Feedback?</button>
                <span className="made-by">Made and reworked by DarttGoblin ❤️</span>
                <span className="copyrights">Copyright all reserved © 2022</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;