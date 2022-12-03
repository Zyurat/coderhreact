import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

function Navbar({titulo='titulo por defecto', menu1='menu por defecto', menu2='menu2 por defecto', menu3='menu3 por defecto'}) {
  //dentro del navbar llamamos el componente cartWidget que devuelve un icono de un carrito
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      {titulo}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                {menu1}
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                {menu2}
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                {menu3}
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
