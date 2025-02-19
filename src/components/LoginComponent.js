import React, { useState } from 'react';
import { pageTitile } from '../components/ProductComponent';
import { useNavigate } from 'react-router-dom';


const LoginComponent = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Для перенаправления без перезагрузки
    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

       

        try {
           // console.log(JSON.stringify({ login, password }))
            const response = await fetch('http://localhost:8080/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                
                body: JSON.stringify({ login, password }), // Отправляем логин и пароль
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Токен:', data.token);
                localStorage.setItem('authToken', data.token); // Сохраняем токен
                //window.location.href = '/'; // Перенаправляем на страницу продуктов
                navigate('/'); 
                // Здесь можно сохранить токен и перенаправить пользователя
            } else {
                throw new Error('Ошибка аутентификации');
            }
        } catch (err) {
            setError(err.message); // Обработка ошибки
        }
    };

    return (
        <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
          
            <h2>Вход в систему</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='card-body'>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                    <label htmlFor="login">Логин:</label>
                    <input
                        type="text"
                        id="login"
                        className='form-control' // Добавляем класс Bootstrap
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        className='form-control' // Добавляем класс Bootstrap
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
            </div>
            </div>
      </div>

    </div>
    );
};

export default LoginComponent;