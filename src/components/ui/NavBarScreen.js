import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarScreen = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Daniel Huenul C&aacute;rcamo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dhcNavbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dhcNavbar">
          <div className="navbar-nav">
            <Link className="nav-link" to="/about">Sobre mi</Link>
            <Link className="nav-link" to="/projects">Mis proyectos</Link>
            <Link className="nav-link" to="/contact">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
