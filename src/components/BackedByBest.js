import React, { useEffect, useRef, useState } from "react";
import "./BackedByBest.css";

const logos = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcRvNX_Mi5g8ScKj3MdiXFpZ2TQtqMSD-Aw&s", alt: "GFC logo" },
    { src: "https://www.logosvgpng.com/wp-content/uploads/2018/03/rocket-internet-logo-vector.png", alt: "SHRUG logo" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoe2LqIpgcuYMVGrEJ71xEDEbqSFqQKMxkGwGJZuFc0x1gby0rg0tMQTquHILbB1elhI&usqp=CAU", alt: "ROCKET INTERNET logo" },
    { src: "https://storage.googleapis.com/a1aa/image/oVVWmh6dOAYMvycneUS67pwyhGIHFd0T8C3EUuCm5_U.jpg", alt: "TDV Partners logo" },
    { src: "https://storage.googleapis.com/a1aa/image/D2Vcr9_y7uHomMq8Efb3wwMN379dMQxzP7ZZRBNwaFM.jpg", alt: "Y Combinator logo" },
    { src: "https://storage.googleapis.com/a1aa/image/8wJP1YjBEFq5muXy9nFAOSjmVDL1qHPgly3H38RbZeI.jpg", alt: "PIONEER FUND logo" }
];

const BackedByBest = () => {
    const titleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentTitle = titleRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (currentTitle) {
            observer.observe(currentTitle);
        }

        return () => {
            if (currentTitle) {
                observer.unobserve(currentTitle);
            }
        };
    }, []);

    return (
        <div className="backed-container">
            <h1 ref={titleRef} className={`title ${isVisible ? "visible" : ""}`}>
                We are backed by the best
                <img src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/65a2bef0fc7fdb5d3702f6dc_Highlight_10.svg" alt="images" className="image" />
            </h1>
            <div className="logo-scroller">
                <div className="logo-track">
                    {[...logos, ...logos].map((logo, index) => (
                        <div className="logo-item" key={index}>
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BackedByBest;
