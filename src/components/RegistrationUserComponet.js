import React, { useEffect, useState } from 'react';
import { createUser } from '../service/ProductService'; 
import { useNavigate } from 'react-router-dom';

const RegistrationUserComponent = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    login: '',
    password: '',
  });
  const navigate = useNavigate();

  const saveUser = (e) => {
    e.preventDefault();

    const user = { login, password };
    console.log(user);

    if (validateForm()) {
      createUser(user)
        .then((response) => {
          console.log(response.data);
          navigate('/login'); // Redirect to login or another page upon successful registration
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (login.trim()) {
      errorsCopy.login = '';
    } else {
      errorsCopy.login = 'Login is required';
      valid = false;
    }

    if (password.trim()) {
      errorsCopy.password = '';
    } else {
      errorsCopy.password = 'Password is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h2 className='text-center'>Register</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Login</label>
                <input
                  type='text'
                  placeholder='Enter your login'
                  value={login}
                  className={`form-control ${errors.login ? 'is-invalid' : ''}`}
                  onChange={(e) => setLogin(e.target.value)}
                />
                {errors.login && <div className='invalid-feedback'>{errors.login}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Password</label>
                <input
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
              </div>

              <button type='button' className='btn btn-success' onClick={saveUser}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationUserComponent;