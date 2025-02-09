import React, { useEffect, useRef, useState } from "react";
import "./CreatorsPage.css";

const CreatorsPage = () => {
    const logos = [
        "https://storage.googleapis.com/a1aa/image/wLCFRPzUaagUoX9PHRgQbEGE5ijsD00PrZZ8I9jQbbA.jpg",
        "https://storage.googleapis.com/a1aa/image/0eZsLgM3imke2Hre5GMRdVCBq46iJX0pDLrrGiD-O4Y.jpg",
        "https://storage.googleapis.com/a1aa/image/H9XX2UaDF_d5i9Cq4_GnjQUw6Hw61nqvCLgwmW14xSU.jpg",
        "https://storage.googleapis.com/a1aa/image/kKaCkf0elnW19gO3p1hTYElGulF6p5KdnnXrlVt5cnM.jpg",
        "https://storage.googleapis.com/a1aa/image/oMh8J-HUbevHvOwhJB7zxnUS_nFoX9WudA0WHO8cCGI.jpg",
        "https://storage.googleapis.com/a1aa/image/8t_-NSPpBMSvq2_5J4tRvdua4IuQEvvd_qBqjNz2F4o.jpg",
        "https://storage.googleapis.com/a1aa/image/-uHDYWMSr5REtddg0ZD25LHaW6Dum_jeuNixqmTemZs.jpg",
        "https://storage.googleapis.com/a1aa/image/FeWOx3dh3SCYaobI9zeaAs-9UDWSpstACJOAdWHXxeA.jpg",
        "https://storage.googleapis.com/a1aa/image/c09MmeIsoATLLmQpsLNTscsSugwFNr9hMu6dTKXGSII.jpg",
    ];
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);
    return (
        <div ref={sectionRef} className={`creators-page ${isVisible ? "visible" : ""}`}>
            <div className="contain">
                <div className="scroll-container">
                    <div className="logo-grid">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="logo-item">
                                <img src={logo} alt={`Logo ${index + 1}`} className="logo-image" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="content">
                    <h1> <span className="title-orange">10000+</span> Creators</h1>
                    <h2 className="title-black">Can’t be wrong</h2>
                    <p className="description">
                        Start your online business today by signing up with AppX and unleash your creativity!
                    </p>
                    <button className="schedule-button">
                        Schedule Demo <img src='https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/66aa0316fd7b6afca072f4b2_Vector%20628.png' alt='arrow-side' className='arrow-side'></img>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default CreatorsPage;







