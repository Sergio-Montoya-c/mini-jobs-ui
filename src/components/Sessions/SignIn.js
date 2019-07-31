import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = event =>
    setInputs({ ...inputs, [event.target.name]: event.target.value});
  
  const handleSubmit = async event => {
    event.preventDefault();
    const result = await axios.post('http://localhost:3000/login', {user: {...inputs}});
    console.log(result);
  }

  return (
    <form className="box" onSubmit={handleSubmit}>
      <strong>Ya tienes una cuenta?</strong>
      <div className="field">
        <label>Email:</label>
        <div className="control">
          <input type="text" class="input" name="email" placeholder="correo@gmail.com" onChange={handleInputChange} />
        </div>
      </div>
      <div className="field">
        <label>Password:</label>
        <div className="control">
          <input type="password" class="input" name="password" placeholder="Contraseña..." onChange={handleInputChange} />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">Iniciar Sesión</button>
        </div>
        <div class="control">
          <button class="button is-text">Registrarse</button>
        </div>
      </div>
    </form>
  );
}

export default SignIn;

