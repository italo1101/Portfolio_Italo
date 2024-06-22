import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Serviços</h2>
            <span className="section_subtitle">O que eu ofereço</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Desenvolvimento <br /> de Aplicações Web</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>
                        ver mais
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="ui uil-times services-modal-close"></i>

                            <h3 className="services_modal-title">Desenvolvimento de Aplicações Web</h3>
                            <p className="services_modal-description">Criação de sites e aplicações web responsivas e dinâmicas.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desenvolvimento de Single Page Applications (SPAs) utilizando ReactJS.</p>
                                </li>
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Integração de APIs para fornecer funcionalidades dinâmicas e interativas.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Desenvolvimento <br /> Frontend</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>
                        ver mais
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="ui uil-times services-modal-close"></i>

                            <h3 className="services_modal-title">Desenvolvimento Frontend</h3>
                            <p className="services_modal-description">Design e implementação de interfaces de usuário modernas.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desenvolvimento de componentes reutilizáveis com ReactJS e TypeScript.</p>
                                </li>
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Estilização avançada com Tailwind CSS para criar layouts atraentes e responsivos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-server services_icon"></i>
                        <h3 className="services_title">Desenvolvimento <br /> Backend</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>
                        ver mais
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="ui uil-times services-modal-close"></i>

                            <h3 className="services_modal-title">Desenvolvimento Backend</h3>
                            <p className="services_modal-description">Criação de servidores e APIs RESTful com NodeJS.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Implementação de lógica de negócios e gerenciamento de banco de dados.</p>
                                </li>
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desenvolvimento de autenticação e autorização seguras.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">Design e <br /> Prototipagem</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(4)}>ver mais
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="ui uil-times services-modal-close"></i>

                            <h3 className="services_modal-title">Design e Prototipagem</h3>
                            <p className="services_modal-description">Criação de wireframes e protótipos interativos utilizando Figma.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Transformação de ideias em designs funcionais.</p>
                                </li>
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Garantir uma experiência de usuário fluida e coerente.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-clipboard-alt services_icon"></i>
                        <h3 className="services_title">Gerenciamento de <br /> Projetos Ágeis</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(5)}>ver mais
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 5 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="ui uil-times services-modal-close"></i>

                            <h3 className="services_modal-title">Gerenciamento de Projetos Ágeis</h3>
                            <p className="services_modal-description">Organização e gestão de projetos utilizando metodologias ágeis.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Planejamento de sprints, definição de tarefas e acompanhamento do progresso.</p>
                                </li>
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Comunicação eficiente com clientes e equipes para garantir a entrega de projetos no prazo.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-lightbulb-alt services_icon"></i>
                        <h3 className="services_title">Consultoria em <br /> Desenvolvimento</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(6)}>ver mais
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 6 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="ui uil-times services-modal-close"></i>

                            <h3 className="services_modal-title">Consultoria em Desenvolvimento</h3>
                            <p className="services_modal-description">Aconselhamento sobre as melhores práticas e tecnologias para o seu projeto.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Avaliação de projetos existentes e recomendação de melhorias.</p>
                                </li>
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Sugestões de tecnologias e frameworks mais adequados para cada caso.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
