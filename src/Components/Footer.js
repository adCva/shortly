import React from 'react';
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container section-width">
            <img src="./images/logo.svg" alt="Logo" className="logo-footer"/>

            {/* ==================================== Links ==================================== */}
            <div className="footer-links-container">
                <div className="footer-links-group">
                    <h6>Features</h6>
                    <button>Link Shortening</button>
                    <button>Branded Links</button>
                    <button>Analytics</button>
                </div>
                <div className="footer-links-group">
                    <h6>Resources</h6>
                    <button>Blog</button>
                    <button>Developers</button>
                    <button>Support</button>
                </div>
                <div className="footer-links-group">
                    <h6>Company</h6>
                    <button>About</button>
                    <button>Our Team</button>
                    <button>Careers</button>
                    <button>Contact</button>
                </div>

                {/* ==================================== Social Media ==================================== */}
                <div className="footer-social-container">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterest /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;