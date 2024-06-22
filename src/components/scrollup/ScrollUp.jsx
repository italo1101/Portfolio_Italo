import React, { useEffect } from 'react';
import "./scrollUp.css";

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".ScrollUp");
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a href="#" className="ScrollUp" onClick={scrollToTop}>
            <i className="uil uil-arrow-up ScrollUp_icon"></i>
        </a>
    );
};

export default ScrollUp;
