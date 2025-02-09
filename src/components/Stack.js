import React, { useEffect, useRef, useState } from "react";
import "./Stack.css";

const TechStack = () => {
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
        <div className="techstack-container">
            <h1 ref={titleRef} className={`titles ${isVisible ? "visible" : ""}`}>
                The <span className="text-red-500">Complete Tech Stack</span>
            </h1>
            <div className="stack-wrapper">
                <img
                    src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/6690f5ab0adc23c071aed1cb_iOs%20(2).avif"
                    alt="Tech Stack"
                    className="stack-image"
                />
                <div className="labels">
                    <div className="label-item">
                        <div className="line"></div>
                        <p>Website</p>
                    </div>
                    <div className="label-item">
                        <div className="line"></div>
                        <p>iOS App</p>
                    </div>
                    <div className="label-item">
                        <div className="line"></div>
                        <p>Android App</p>
                    </div>
                    <div className="label-item">
                        <div className="line"></div>
                        <p>Content Security</p>
                    </div>
                    <div className="label-item">
                        <div className="line"></div>
                        <p>Mac/Desktop App</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
