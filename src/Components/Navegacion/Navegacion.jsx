import React, { useState } from 'react';
import { FiHome } from 'react-icons/fi';
import '../Navegacion/Navegacion.css'

const Navegacion = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FiHome />
      </div>
      <ul className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#sobre-mi">Sobre mí</a>
        </li>
        <li>
          <a href="#habilidades">Habilidades</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
      <div className="mobile-toggle" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};
  
  export default Navegacion;