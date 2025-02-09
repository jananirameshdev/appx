import { useState } from "react";
import "./FAQ.css";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <i className={`faq-icon ${isOpen ? 'open' : ''}`}></i>
            </div>
            {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
        </div>
    );
};

function FAQ() {
    const faqs = [
        {
            question: "What services does AppX offer?",
            answer: "AppX offers a variety of services including web development, mobile app development, and more."
        },
        {
            question: "Do I need technical expertise to use AppX services?",
            answer: "No, you do not need technical expertise to use AppX services. Our team will handle all technical aspects for you."
        },
        {
            question: "How long does it take to create a website or application with AppX?",
            answer: "The time to create a website or application with AppX varies depending on the complexity of the project. Typically, it takes a few weeks to a few months."
        },
        {
            question: "Can I request changes or updates to my website or app after it's live?",
            answer: "Yes, you can request changes or updates to your website or app after it's live. Our team will assist you with any modifications you need."
        },
        {
            question: "What kind of support is available after the website or app is launched?",
            answer: "AppX provides ongoing support after the website or app is launched, including maintenance, updates, and troubleshooting."
        }
    ];

    return (
        <div className="faq-container">
            <div className="faq-header">
                <img alt="Question mark icon" className="faq-icon-image" src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/65a249c60e2f09b58af721d8_Q3.avif" />
                <h1 className="faq-title">FAQs</h1>
                <img alt="Decorative line" className="faq-line" src="https://cdn.prod.website-files.com/65a21f6c73352e86a33fcd30/65a24cc8fa5edfde775e7032_Vector.avif" />
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
