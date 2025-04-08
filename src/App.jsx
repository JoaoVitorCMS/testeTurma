
/* import style from './App.module.css' */
import { Menu } from './components/menu'
// import img01 from './assets/images/img.jfif'
import { cards } from "./assets/mock/cards"
import { useState } from 'react'
function App() {
 const defaultPhoneNumber = "5541999999"

const handleChange = (e) => {
  const{name, value} = e.target;
  setFormData({...formData, [name]: value})
}

const handleZap = () => {
  const {name, email, message} = formData

  const URLzap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}%text=
  Nome:%20${name}%0D%0A
  Email:%20${email}%0D%0A
  Mensagem:%20${message}%0D%0A`

  window.open(URLzap, "_blank")
}
 const [formData,setFormData] = useState({
  name: "",
  email: "",
  message: "",
 })

  return (
    <>
     <Menu option01='Sessao 01' option02='Sessao 02' option03='Contato'></Menu>
     <main>
      <section id='s1'>
        <h2>Sessao 1</h2>
        {/* <img src={img01} alt="COOOOCOCOOO" /> */}
        {cards.map((item, index) => {
          return(
            <div key={index}>
              <h5>{item.text}</h5>
              <img src={item.img} alt={item.text} width={200} height={"auto"} />
            </div>
          )
        })}
      </section>
      <section id='s2'>
        <h2>Sessao 2</h2>
      </section>
      <section id='s3'>
        <h2>Contato</h2>
        <br />
        <input placeholder="Insira seu nome" type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
        <input placeholder= "Insira seu email" type="text" id='email' name='email'value={formData.email} onChange={handleChange}required/>
        <textarea placeholder="Insira sua messagem" type="text" id='message' name='message'value={formData.message} onChange={handleChange}required></textarea>
        <button onClick={handleZap}>Enviar Menssagem</button>
      </section>
     </main>
    </>
  )
}

export default App
