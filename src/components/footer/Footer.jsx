import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Italo Cruz</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              Sobre
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Projetos
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/italocruz17/"
            className="footer_social-link"
            target="blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://github.com/italo1101"
            className="footer_social-link"
            target="blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="http://www.linkedin.com/in/italo-cruz"
            className="footer_social-link"
            target="blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer_copy">&#169; Italo Cruz. Todos os direitos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
