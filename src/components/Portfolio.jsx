import React from 'react';
import style from './Portfolio.module.css';

function Portfolio({ cardsData }) {
  return (
    <section id="portfolio" className={style.portfolioSection}>
      <h2>Meus Projetos</h2>
      <div className={style.projectsGrid}>
        {cardsData.map((item, index) => (
          <div key={index} className={style.projectCard}>
            {item.img && <img src={item.img} alt={item.text} />}
            <h5>{item.text}</h5>
            {item.githubLink && (
              <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;