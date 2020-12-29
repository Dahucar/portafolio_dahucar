import React from 'react';

export const NavBarScreen = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand">Daniel Huenul C&aacute;rcamo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dhcNavbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="dhcNavbar">
          <div className="navbar-nav">
            <a className="nav-link" href="#">Sobre mi</a>
            <a className="nav-link" href="#">Proyectos</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
