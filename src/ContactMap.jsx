// src/components/Contact.jsx
import React, { useState } from 'react';
import style from './ContactMap.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Menu } from './components/menu';
import ContactFooter from './components/ContactFooter';

function SetViewOnClick({ animateRef, coords }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(coords, 15, {
      animate: animateRef.current || false,
    });
  }, [map, coords, animateRef]);
  return null;
}

function Contact() {
  const yourHomeCoordinates = [-25.4079968, -49.2337112];
  const zoomLevel = 15;
  const animateRef = React.useRef(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const yourWhatsAppNumber = "554199892751"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappMessage = `Olá! Meu nome é ${name}.\nMeu e-mail é: ${email}.\nMensagem:\n${message}`;
    const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Menu option01="Voltar a pagina incial" />
      <div className={style.contactContainer}>
        <div className={style.contactForm}>
          <h2 className={style.tt}>Contato</h2>
          <br />
          <form onSubmit={handleWhatsApp}>
            <input
              placeholder="Insira seu nome"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Insira seu email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Insira sua messagem"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar Menssagem por WhatsApp</button>
          </form>
        </div>
        <div className={style.contactMap}>
          <h2>Localização</h2>
          <MapContainer
            center={yourHomeCoordinates}
            zoom={zoomLevel}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '600px' }}
          >
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={yourHomeCoordinates}>
              <Popup>Minha Casa!</Popup>
            </Marker>
            <SetViewOnClick coords={yourHomeCoordinates} animateRef={animateRef} />
          </MapContainer>
        </div>
      </div>
      <ContactFooter /> 
    </>
  );
}

export default Contact;