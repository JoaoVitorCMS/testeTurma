// src/components/Footer.jsx
import React from 'react';
import style from './Footer.module.css';
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Importe os ícones

function Footer() {
  const whatsappNumber = "554199892751"; // Seu número de WhatsApp

  return (
    <footer className={style.footer}>
      <div className={style.copyright}>
        <p>&copy; {new Date().getFullYear()} João Vitor Costa de Moura Santos. Todos os direitos reservados.</p>
      </div>
      <div className={style.socialIcons}>
        <a href="https://github.com/JoaoVitorCMS" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://linkedin.com/in/joão-vitor-c-de-moura-santos-8485b2333/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;