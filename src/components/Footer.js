import React from 'react';
import './Footer.css';
import { FaSquareYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
    return (
        <div className="container">
            <header className="header">
                <img
                    src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/65a22140604428bacdfccdce_Placeholder.avif"
                    alt="AppX Logo"
                />
                <nav>
                    <ul>
                        {["FAQS", "Refund Policy", "Contact Us", "Success Stories", "Terms and Conditions", "Privacy Policy"]
                            .map((item, index) => (
                                <li key={index}>
                                    <a href="/">{item}</a>
                                </li>
                            ))}
                    </ul>
                </nav>
            </header>
            <main className="footer-container">
                <div className="foot-content">
                    <p>© 2024 AppX. All rights reserved</p>
                    <p>Address: D-76, Sector 63, Noida, Uttar Pradesh - 201301</p>
                    <p>Ph. No: +91 7206392937</p>
                </div>
                <div className="social-media">
                    {[IoLogoLinkedin, RiInstagramFill, FaSquareYoutube].map((Icon, index) => (
                        <div className="icon1" key={index}>
                            <Icon size={25} color="#222" />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Footer;
