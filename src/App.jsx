
/* import style from './App.module.css' */
import { Menu } from './components/menu'

function App() {

  return (
    <>
     <Menu option01='Sessao 01' option02='Sessao 02' option03='Contato'></Menu>
     <main>
      <section id='s1'>
        <h2>Sessao 1</h2>
      </section>
      <section id='s2'>
        <h2>Sessao 2</h2>
      </section>
      <section id='s3'>
        <h2>Contato</h2>
      </section>
     </main>
    </>
  )
}

export default App
