import React, { useEffect, useRef, useState } from "react";
import "./Revenue.css";

const revenueData = [
    {
        title: "E-books & Test Series",
        description: "Transform your expertise into digital resources",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c4350ed31b4f21b060ff63_7.avif",
    },
    {
        title: "Courses",
        description: "Guide learners with comprehensive course tools",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c5967c5b6efa3dc8c13480_Blue%20Flat%20Illustrative%20Finance%20Company%20Logo%20(17).avif",
    },
    {
        title: "Webinars",
        description: "Turn your online events into a profitable experience",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c5983d368be4a3c4376cc0_Blue%20Flat%20Illustrative%20Finance%20Company%20Logo%20(19).avif",
    },
    {
        title: "Podcasts",
        description: "Monetize audio content effortlessly with our tools",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c43554decab6dfeaf6b0c9_5.avif",
    },
    {
        title: "Merchandise",
        description: "Custom products, designed and sold with ease",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c43542a320ef799febc386_6.avif",
    },
    {
        title: "Memberships",
        description: "Tailored subscription plans that maximize value",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c434f18cbf6fe4e11e3889_3.avif",
    },
    {
        title: "Paid Communities",
        description: "Rich communities to engage your most loyal fans",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c59c3bdabef196effd9333_Blue%20Flat%20Illustrative%20Finance%20Company%20Logo%20(21).avif",
    },
    {
        title: "Third Party Integrations",
        description: "Enhance reach and revenue with seamless integrations",
        image: "https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66c434ea1ea291f5bf52c586_2.avif",
    },
];

const Revenue = () => {

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
        <div className="revenue-container">
            <h1 ref={titleRef} className={`retitle ${isVisible ? "visible" : ""}`}>
                Diversify Your <span className="highlightes">Revenue</span>
            </h1>
            <p className="subtitle">
                Unlock your content’s full potential, reap the rewards
            </p>

            <div className="grid-container">
                {revenueData.map((item, index) => (
                    <div key={index} className="grid-item">
                        <img src={`${item.image}`} alt={item.title} className="images" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Revenue;
