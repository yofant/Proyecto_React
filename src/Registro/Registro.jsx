import React from 'react';
import "./Registro.css";

const Registro = () => {
    return (

        <>
        <section className="form-register">

            <form name="datos" method="post" action="">
                <h4>FORMULARIO DE REGISTRO</h4>

                <input class="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" required/>
                <input class="controls" type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" required/>
                <input class="controls" type="text" name="usuario" id="usuario" placeholder="Ingrese su usuario" required/>
                <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su correo" required/>
                <input class="controls" type="date" name="fecha" id="fecha" placeholder="Ingrese la fecha de registro" required/>
                <input class="controls" type="password" name="contrasena" id="contrasena" placeholder="Ingrese su contarseña" required/>
                <p>Estoy de acuerdo con los <a href="#">Terminos y Condiciones</a></p>
                <input type="submit" value="Registrar" class="botons"/>
                <p className="login-register">¿Ya tienes una cuenta? <a href="/loginusuario">Iniciar Sesión</a></p>

            </form>

        </section>   
        
        
        </>
       
    );
};

export default Registro;
