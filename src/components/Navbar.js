import React from 'react'

const Navbar = () => 
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Inicio
        </a>
        <a class="navbar-item">
          Explorar
        </a>      
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
              <a class="button is-primary">
              <strong>Iniciar Sesión</strong>
              </a>
              <a class="button is-light">
                Registrarse
              </a>
          </div>
        </div>
      </div>
    </div>
  </nav>;

export default Navbar;