import React, { useState } from 'react';

const LoginComponent = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
                // Здесь можно сохранить токен и перенаправить пользователя
            } else {
                throw new Error('Ошибка аутентификации');
            }
        } catch (err) {
            setError(err.message); // Обработка ошибки
        }
    };

    return (
        <div>
            <h2>Вход в систему</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Логин:</label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default LoginComponent;