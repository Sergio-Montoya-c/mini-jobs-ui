import React, {useState} from 'react';
import axios from 'axios';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInputChange = event =>
    setInputs({ ...inputs, [event.target.name]: event.target.value});
  
  const handleSubmit = async event => {
    event.preventDefault();
    const result = await axios.post('http://localhost:3001/authenticate', inputs);    
    console.log(result);
  }

  return (
    <form className="box" onSubmit={handleSubmit}>
      <strong>Registrate</strong>
      <div className="field">
        <label>Email:</label>
        <div className="control">
          <input type="text" className="input" name='email' placeholder="correo@gmail.com" onChange={handleInputChange} value={inputs.email} />
        </div>
      </div>
      <div className="field">
        <label>Password:</label>
        <div className="control">
          <input type="password" className="input" name="password" placeholder="Contraseña..." onChange={handleInputChange} value={inputs.password} />
        </div>
      </div>
      <div className="field">
        <label>Password Confirmation:</label>
        <div className="control">
          <input type="password" className="input" name="password_confirmation" placeholder="Contraseña..." onChange={handleInputChange} value={inputs.password_confirmation} />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">Registrarse</button>
        </div>
        <div className="control">
          <button className="button is-text">Iniciar Sesión</button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;

