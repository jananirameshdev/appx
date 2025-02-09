import React, { useEffect, useRef, useState } from "react";
import "./BuildBrand.css";

const BuildBrand = () => {
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
        <div className="buildbrand-container">
            <div className="text-content">
                <h1 ref={titleRef} className={`titled ${isVisible ? "visible" : ""}`}>
                    Build Your <span className="highlighted">Own</span> Brand
                </h1>
                <p className="description">
                    Turn your audience into a thriving community without any coding skills,
                    with a digital platform that's unique.
                </p>
                <button className="cta-button">
                    Get Started <img src='https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66aa0316fd7b6afca072f4b2_Vector%20628.png' alt='arrow-side' className='arrow-side'></img>
                </button>
            </div>
            <div className="image-content">
                <div className="image-wrapper">
                    <video
                        src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30%2F66a76d96b5d9f0aac9dddca1_aaa-transcode.mp4"
                        alt="A laptop displaying a digital platform with various courses and a search bar"
                        className="main-video"
                        autoPlay
                        loop
                        muted />
                </div>
            </div>
        </div>
    );
};

export default BuildBrand;
