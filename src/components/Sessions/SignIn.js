import React from 'react';

const SignIn = () => {
  return (
    <div className="box">
      <strong>Ya tienes una cuenta?</strong>
      <div className="field">
        <label>Email:</label>
        <div className="control">
          <input type="text" class="input" placeholder="correo@gmail.com" />
        </div>
      </div>
      <div className="field">
        <label>Password:</label>
        <div className="control">
          <input type="password" class="input" placeholder="Contraseña..." />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Iniciar Sesión</button>
        </div>
        <div class="control">
          <button class="button is-text">Registrarse</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

