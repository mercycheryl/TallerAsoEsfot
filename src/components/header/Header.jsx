import { useState } from "react";
import { Link } from "react-router-dom";  // solo Link

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className="header">
      <nav className="header__container">
        <div className="header__logo">
          <h1>ASO<span className="header__site">ESFOT</span></h1>
        </div>

        <div className={`header__barra ${menuAbierto ? "activo" : ""}`}>
          <div className="navegacion">
            <Link to="/" className="navegacion__link">Inicio</Link>
            <Link to="/about" className="navegacion__link">Nosotros</Link>
            <Link to="/service" className="navegacion__link">Servicios</Link>
            <Link to="/contact" className="navegacion__link">Contactos</Link>
          </div>
          <div className="buttons">
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Registro</Link>
          </div>
        </div>

        <div className="header__hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars hamburger"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
