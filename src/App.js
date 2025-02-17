import React, { useState, useEffect } from 'react';
import {
  FaArrowUp,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaLaptopCode,
  FaBriefcase,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWrench,
  FaFileAlt,
  FaBug
} from 'react-icons/fa';
import './App.css';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#home" onClick={closeMenu}>Javier Salvador</a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <a href="#home" onClick={closeMenu}>
                <FaHome style={{ marginRight: '8px' }} /> Inicio
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                <FaUser style={{ marginRight: '8px' }} /> Sobre Mi
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                <FaLaptopCode style={{ marginRight: '8px' }} /> Habilidades
              </a>
            </li>
            <li>
              <a href="#qualification" onClick={closeMenu}>
                <FaBriefcase style={{ marginRight: '8px' }} /> Experiencia
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <FaEnvelope style={{ marginRight: '8px' }} /> Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sección de Inicio */}
      <section id="home">
        <div className="home-content">
          <div className="card info-card">
            <h1>
              Javier <span>Salvador</span>
            </h1>
            <img
              src="/CVPHOTO.jfif"
              alt="Foto de Javier Salvador"
              className="avatar"
            />
            <div className="social-buttons">
              <a
                href="https://www.linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="circular-btn linkedin"
                title="LinkedIn"
              >
                <span className="icon"><FaLinkedin /></span>
                <span className="text">Linkedin</span>
              </a>
              <a
                href="https://github.com/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="circular-btn github"
                title="GitHub"
              >
                <span className="icon"><FaGithub /></span>
                <span className="text">Github</span>
              </a>
              <a href="#contact" className="circular-btn contact" title="Contáctame">
                <span className="icon"><FaArrowRight /></span>
                <span className="text">Contacto</span>
              </a>
            </div>
            <p><strong>Desarrollador Full Stack</strong></p>
          </div>
        </div>
      </section>

      {/* Sección "Sobre Mi" */}
      <section id="about">
        <div className="section-content">
          <h2>Sobre Mi</h2>
          <p className="description">
            Soy un apasionado de la tecnología que ha combinado la experiencia en soporte técnico y el análisis de sistemas para transformar ideas en soluciones eficientes. Mi enfoque es buscar la mejora continua y trabajar en equipo para lograr resultados excepcionales.
          </p>
          <a
            href="https://github.com/tu-perfil/tu-repositorio/raw/main/CV-JavierSalvador.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
          <div className="mini-cards">
            <div className="mini-card">
              <FaLaptopCode className="mini-icon" />
              <h3>Analista de Sistemas</h3>
              <p>
                Interpreto y optimizo procesos para asegurar que cada sistema cumpla sus objetivos.
              </p>
            </div>
            <div className="mini-card">
              <FaWrench className="mini-icon" />
              <h3>Soporte Técnico</h3>
              <p>
                Brindo soluciones rápidas y efectivas para mantener la operatividad de la infraestructura.
              </p>
            </div>
            <div className="mini-card">
              <FaFileAlt className="mini-icon" />
              <h3>Análisis de Requisitos</h3>
              <p>
                Reviso la documentación para extraer y dar seguimiento a cada requerimiento del proyecto.
              </p>
            </div>
            <div className="mini-card">
              <FaBug className="mini-icon" />
              <h3>Testing (QA)</h3>
              <p>
                Realizo pruebas exhaustivas para garantizar la calidad y fiabilidad del software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Habilidades */}
      <section id="skills">
        <div className="section-content">
          <h2>Habilidades</h2>
          <p>
            <strong>Lenguajes de Programación:</strong> C, C#, Java, JavaScript, PHP, Python, R, SQL
          </p>
          <p>
            <strong>Bases de Datos:</strong> SQL Server, SQLite, PostgreSQL, MariaDB, MySQL, Oracle
          </p>
          <p>
            <strong>Frameworks:</strong> Angular, Bootstrap, Django, JSF, Materialize, Primefaces, .NET
          </p>
          <p>
            <strong>Idiomas:</strong> Español (nativo), Inglés (intermedio)
          </p>
        </div>
      </section>

      {/* Sección Experiencia */}
      <section id="qualification">
        <div className="section-content">
          <h2>Experiencia</h2>
          <ul>
            <li>
              <strong>Universidad Galileo</strong> (Enero 2019 - Actualidad) - Carrera de Ingeniería de Sistemas, Informática y Ciencias de la Computación.
            </li>
            <li>
              <strong>Auxiliar de Clase y Laboratorio</strong> en Universidad Galileo (2019 - 2022).
            </li>
            <li>
              <strong>Analista Programador</strong> en Grupo Distelsa (Abril 2023 - 2024) - Desarrollo de soluciones Front-End, implementación en .NET y gestión de bases de datos.
            </li>
          </ul>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contact">
        <div className="section-content">
          <h2>Contacto</h2>
          <p><strong>Email:</strong> gordillosalvador2109@gmail.com</p>
          <p><strong>Teléfono:</strong> +(502) 35130035</p>
          <p><strong>Domicilio:</strong> Mixco, Guatemala</p>
        </div>
      </section>

      {showTopBtn && (
        <button id="back-to-top" onClick={scrollToTop} title="Volver arriba">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default App;

