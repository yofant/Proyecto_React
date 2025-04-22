import './Pagina1.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Pagina1 = () => {
    return (
      <>
        <header>
        <a href="#" className="logo">
        
          <p className="logo-nombre">ComuniWeb</p>
        </a>
        <nav>
          <ul>
            <a href="#Segunda">Home</a>
            <a href="#nuestros-servicios">Servicios</a>
            <a href="#mensaje">Contacto</a>
            <a href="#login">Regístrate</a>
            <Link to="/login">Iniciar sesión</Link>
          </ul>
        </nav>

        
      </header>

      <section id="hero">
        <h1>BIENVENIDO A: <br />ComuniWeb</h1>
        <h4>La mejor opción para estar informado</h4>
        <form action="http://whatsapp.com/">
          <button>Contacto</button>
        </form>
      </section>

      <section id="Segunda">
        <div className="container">
        
          <div className="texto">
            <h2>Somos la mejor empresa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident. Tempore possimus
              corrupti ex inventore quos vero ratione provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur voluptate ullam quas
              illum quod. Commodi perspiciatis cum, libero assumenda doloribus aliquam voluptatibus laborum,
              rerum, consequuntur pariatur ipsam maiores culpa?
            </p>
          </div>
        </div>
      </section>

      <section id="nuestros-servicios">
        <div className="container">
          <h2>NUESTROS SERVICIOS</h2>
          <div className="servicios">
            <div className="carte">
              <h3>Servicio 1</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>+info</button>
            </div>
            <div className="carte">
              <h3>Servicio 2</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>+info</button>
            </div>
            <div className="carte">
              <h3>Servicio 3</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>+info</button>
            </div>
          </div>
        </div>
      </section>

      <section id="mensaje">
        <div className="Datos">
          <h2>CONTACTO</h2>
          <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required placeholder="Ingrese nombre" />

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required placeholder="Su telefono" />

            <label htmlFor="correo">Email:</label>
            <input type="email" id="correo" name="email" required placeholder="Ingrese email" />

            <label htmlFor="solicitud">Solicitud:</label>
            <textarea id="solicitud" name="solicitud" rows="4" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>@fabianHidalgo</p>
        </div>
      </footer>
    </>
  );
    
  };
  export default Pagina1;
   