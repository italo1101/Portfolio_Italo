import React from "react";

const Info = () => {
    return(
        <div className="about_info grid">
            <div className="about_box">
                <i class='bx bx-laptop'></i>
                <h3 className="about_title">Experiência</h3>
                <span className="about_subtitle">Trabalhos em Parceria com o porto Digital</span>
            </div>

            <div className="about_box">
                <i class='bx bxs-briefcase-alt-2'></i>
                <h3 className="about_title">Traga seu Produto para o Digital</h3>
                <span className="about_subtitle">desenvolvimento web, design de interface e consultoria</span>
            </div>

            <div className="about_box">
            <i class='bx bx-check'></i>
            <h3 className="about_title">Garantia de Qualidade</h3>
            <span className="about_subtitle">Compromisso com resultados</span>
            </div>
        </div>  
    )
}

export default Info