import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            <NavLink activeClassName='active' className="nav-link" to="/about">Sobre mi</NavLink>
            <NavLink activeClassName='active' className="nav-link" to="/projects">Mis proyectos</NavLink>
            <NavLink activeClassName='active' className="nav-link" to="/contact">Contacto</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
