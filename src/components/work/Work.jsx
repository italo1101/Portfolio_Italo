import React from 'react';
import Works from './Works'
import "./work.css";

const Work = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section_title">Portfólio</h2>
            <span className="section_subtitle">Meus Trabalhos Recentes</span>

            <Works/>
        </section>
    )
}

export default Work;