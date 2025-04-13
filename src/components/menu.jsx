import React from 'react';
import style from './menu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useLocation } from 'react-router-dom'; // Importe useLocation

export const Menu = (props) => {
  const scrollToSection = (id, event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o elemento
    }
  };

  const location = useLocation(); // Obtém a localização atual

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${style.navBar}`}>
        <div className={"container-fluid"}>
          <button
            className={"navbar-toggler"}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse"} id="navbarNavAltMarkup">
            <div className={"navbar-nav"}>
              <a
                className={"nav-link"}
                href={location.pathname === '/' ? "#s1" : "/"} // Rola para #s1 na home, navega para / em outras páginas
                onClick={(event) => {
                  if (location.pathname === '/') {
                    scrollToSection('s1', event);
                  }
                }}
              >
                {props.option01}
              </a>
              <a
                className={"nav-link"}
                href="#portfolio"
                onClick={(event) => scrollToSection('portfolio', event)}
              >
                {props.option02}
              </a>
              <a className={"nav-link"} href="/contact">{props.option03}</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};