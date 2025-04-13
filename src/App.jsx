// src/App.jsx
import { Menu } from './components/menu';
import { cards } from "./assets/mock/cards";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import style from './App.module.css';

function App() {
  return (
    <>
      <Menu option01='Sobre Mim' option02='Projetos' option03='Contato' />
      <main>
        <section id='s1'>
          <div className={style.aboutMeContainer}>
            <div className={style.aboutMeSection}>
              <h2>Sobre Mim</h2>
              <p>Olá! Meu nome é João Vitor Costa de Moura Santos e sou um desenvolvedor em formação apaixonado por transformar ideias em soluções digitais. Nordestino comunicativo, acredito que tecnologia e humanidade andam juntas!</p>
              <p>Tenho experiência básica em Java, HTML/CSS, JavaScript e estou explorando o React. Também já trabalhei com bancos de dados e adoro observar como as pessoas interagem com sistemas — isso me ajuda a criar interfaces mais intuitivas.</p>
              <p>Minha jornada no mundo da programação começou no técnico de TI do SENAI, onde descobri que código é como poesia: precisa de lógica, mas também de criatividade. Hoje, além do técnico, curso Ciência da Computação e pratico através de projetos pessoais.</p>
              <p>Busco ser "útil" em tudo — não só na técnica, mas na capacidade de dialogar, aprender e entregar resultados que realmente façam diferença. Quero oportunidades para evoluir e contribuir com minha energia e curiosidade!</p>
              <h3>Habilidades Principais:</h3>
              <ul>
                <li>Java (básico)</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React (em aprendizado)</li>
                <li>Banco de dados</li>
                <li>Comunicação e trabalho em equipe</li>
              </ul>
            </div>
          </div>
        </section>
        <section id='portfolio'> {/* Adicionei o ID 'portfolio' aqui */}
          <Portfolio cardsData={cards} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;