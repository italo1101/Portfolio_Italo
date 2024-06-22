import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeItem, setActiveItem] = useState("home");

    useEffect(() => {
        const handleLinkClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                setActiveItem(targetId);
                showMenu(false); // Optionally close the menu after clicking a link
            }
        };

        const navLinks = document.querySelectorAll('.nav_link');
        navLinks.forEach(link => link.addEventListener('click', handleLinkClick));

        return () => {
            navLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">
                    Italo Cruz
                </a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a
                                href="#home"
                                className={activeItem === "home" ? "nav_link active-link" : "nav_link"}
                                onClick={() => setActiveItem("home")}
                            >
                                <i className="uil uil-estate nav_icon"></i> Início
                            </a>
                        </li>

                        <li className="nav_item">
                            <a
                                href="#about"
                                className={activeItem === "about" ? "nav_link active-link" : "nav_link"}
                                onClick={() => setActiveItem("about")}
                            >
                                <i className="uil uil-user nav_icon"></i> Sobre
                            </a>
                        </li>

                        <li className="nav_item">
                            <a
                                href="#skills"
                                className={activeItem === "skills" ? "nav_link active-link" : "nav_link"}
                                onClick={() => setActiveItem("skills")}
                            >
                                <i className="uil uil-file-alt nav_icon"></i> Habilidades
                            </a>
                        </li>

                        <li className="nav_item">
                            <a
                                href="#services"
                                className={activeItem === "services" ? "nav_link active-link" : "nav_link"}
                                onClick={() => setActiveItem("services")}
                            >
                                <i className="uil uil-briefcase nav_icon"></i> Serviços
                            </a>
                        </li>

                        <li className="nav_item">
                            <a
                                href="#portfolio"
                                className={activeItem === "portfolio" ? "nav_link active-link" : "nav_link"}
                                onClick={() => setActiveItem("portfolio")}
                            >
                                <i className="uil uil-scenery nav_icon"></i> Porfólio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a
                                href="#contact"
                                className={activeItem === "contact" ? "nav_link active-link" : "nav_link"}
                                onClick={() => setActiveItem("contact")}
                            >
                                <i className="uil uil-message nav_icon"></i> Contato
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
