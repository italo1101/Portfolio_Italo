import React from 'react';

const ScrollDown = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("about"); // Substitua "about" pelo id do elemento alvo
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth', // Rolagem suave
          block: 'start', // Alinha o topo do elemento alvo com o topo da janela de visualização
        });
      }, 100); // Aguarda 100 milissegundos antes de rolar
    }
  };

  return (
    <div className="home_scroll">
      <a href="#about" className="home_scroll-button button--flex" onClick={handleClick}>
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "var(--container-color)",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "var(--container-color)",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>

        <span className="home_scroll-name">rolar para baixo</span>
        <i className="uil uil-arrow-down home_scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
