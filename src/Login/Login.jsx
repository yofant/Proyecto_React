import React from 'react';
import './Login.css';
export function Login() {

  return (
    <section className="form-register">

      <form name="datos" method="post" action="">
        <h4>INICIAR SESION</h4>

        <input className="controls" type="text" name="usuario" id="usuario" placeholder="Ingrese su usuario" required/>
        <input className="controls" type="password" name="contrasena" id="contrasena" placeholder="Ingrese su contarseña" required/>
        <p>Estoy de acuerdo con los <a href="#">Terminos y Condiciones</a></p>
        <input type="submit" value="Iniciar sesion" className="botons"/>

      </form>

    </section>   
  )    


}

export default Login;