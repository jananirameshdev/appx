import React, { useState } from "react";
import Headroom from "react-headroom";
import { Menu, X } from "lucide-react";

import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Headroom>
            <div className="navbar">
                <img
                    src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/65a22140604428bacdfccdce_Placeholder.avif"
                    alt="logo"
                    className="logo"
                />
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={`nav-right-wrapper ${menuOpen ? "open" : ""}`}>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Features
                            <img
                                src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/65a22213a4d5d6dbe8bacac6_Vector.png"
                                alt="arrow-down"
                                className="arrow-down"
                            />
                        </button>
                        <div className="dropdown-content">
                            <a href="#a" className="a">
                                <div className="a1">
                                    <img
                                        src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66a9fb6c8710449f381d498a_Blue%20Flat%20Illustrative%20Finance%20Company%20Logo%20(7).avif"
                                        alt="img1"
                                        className="img1"
                                    />
                                    <p className="sp1">Courses</p>
                                </div>
                            </a>
                            <a href="#b" className="a">
                                <div className="a1">
                                    <img
                                        src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66a9fb2efd04c0550594d80e_Blue%20Flat%20Illustrative%20Finance%20Company%20Logo%20(8).avif"
                                        alt="img2"
                                        className="img1"
                                    />
                                    <p className="sp1">Community & Memberships</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="success">Success Stories</div>
                    <div className="faq">FAQs</div>
                    <div className="schedule">
                        Schedule a demo
                        <img
                            src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66aa0316fd7b6afca072f4b2_Vector%20628.png"
                            alt="arrow-side"
                            className="arrow-side"
                        />
                    </div>
                </div>
            </div>
        </Headroom>
    );
}

export default Navbar;
