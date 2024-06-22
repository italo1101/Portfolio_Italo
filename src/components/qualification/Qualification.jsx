import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualificação</h2>
      <span className="section_subtitle">Minha Jornada</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i> Educação
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i> Experiência
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Análise e Desenvolvimento de Sistemas</h3>
                <span className="qualification_subtitle">UNIT - Universidade Tiradentes</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2025
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Assistente Administrativo</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
            </div>


          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Desenvolvedor FullStack</h3>
                <span className="qualification_subtitle">Secretária de Educação - Residência Porto Digital</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Desenvolvedor FrontEnd</h3>
                <span className="qualification_subtitle">Ustore - Residência Porto Digital</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Assistente Administrativo</h3>
                <span className="qualification_subtitle">ONS - Operador Nacional do Sistema Elétrico</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
