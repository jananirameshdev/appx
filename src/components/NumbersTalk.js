import React, { useEffect, useRef, useState } from "react";
import "./NumbersTalk.css";

const NumbersTalk = () => {
    const stats = [
        { number: "10000+", label: "Creators", icon: "👤" },
        { number: "150+", label: "Countries served", icon: "🌍" },
        { number: "6 Crores +", label: "User signups", icon: "📲", bold: true },
        { number: "10 Lakhs +", label: "Live streams per year", icon: "👁️", bold: true },
        { number: "₹1000 Crores +", label: "Earned by creators", icon: "📜", bold: true },
    ];

    const titleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const currentRef = titleRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);


    return (
        <div className="numbers-container">
            <div className="content-wrapper">
                <div className="text-content">
                    <h1 ref={titleRef} className={`numbers-title ${isVisible ? "visible" : ""}`}>
                        We let the <span className="highlights">numbers</span> talk
                    </h1>
                    <p>One platform, boundless possibilities for creators</p>
                </div>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <span className="stat-icon">{stat.icon}</span>
                            <div className="stat-number">
                                {stat.number} {stat.bold && <span className="bold-text">+</span>}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NumbersTalk;
