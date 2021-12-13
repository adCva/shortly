import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { useTransition, animated } from 'react-spring';


function Nav() {
    const [ mobileMenu, setMobileMenu ] = useState(false);
    const menuRef = useRef();

    // Open/close mobile menu.
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    // Close mobile menu on link click.
    const closeMenu = () => {
        if (window.innerWidth < 768) {
            alert('This button does nothing.');
            setMobileMenu(false);
        } else {
            alert('This button does nothing.');
        }
    };

    // React Spring.
    const transition = useTransition(mobileMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    // Display menu on screens > 768px & close menu on outside click.
    useEffect(() => {
        let isNotMobile = () => {
            if (window.innerWidth > 767) {
                setMobileMenu(true);
            } else {
                setMobileMenu(false);
            }
        }

        let closeMenuOutsideClick = (event) => {
            if (window.innerWidth < 768) {
                if (mobileMenu && !menuRef.current.contains(event.target)) {
                    setMobileMenu(false);
                }
            }
        }

        document.addEventListener("click", closeMenuOutsideClick);
        window.addEventListener("resize", isNotMobile);
        window.addEventListener("load", isNotMobile);

        return() => {
            document.removeEventListener("click", closeMenuOutsideClick);
            window.removeEventListener("resize", isNotMobile);
            window.removeEventListener("load", isNotMobile);
        }
    })


    return (
        <div className="nav-container section-width">
            <img src="./images/logo.svg" alt="Logo" className="nav-logo"/>
            <button onClick={toggleMobileMenu} className="mobile-btn">{mobileMenu ? <FaWindowClose/> : <GiHamburgerMenu/>}</button>
            {transition((style, mobileMenu) => mobileMenu ? (
                <animated.div style={style} className="nav-menu-container" ref={menuRef}>
                    <div className="nav-menu nav-group">
                        <button className="menu-link" onClick={closeMenu}>Features</button>
                        <button className="menu-link" onClick={closeMenu}>Pricing</button>
                        <button className="menu-link" onClick={closeMenu}>Resources</button>
                    </div>
                    <div className="nav-singup nav-group">
                        <button className="menu-link" onClick={closeMenu}>Login</button>
                        <button className="btn-signUp" onClick={closeMenu}>Sign Up</button>
                    </div>
                </animated.div>
            ) : null)}
        </div>
    )
}

export default Nav;