import React from 'react'

import { useNavigate } from "react-router-dom";
//import { Button } from "@/components/ui/button";  // Убедитесь, что путь правильный

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Удаляем токен
    navigate("/login"); // Перенаправляем на страницу входа
  };

  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark'>
          <a className="navbar-brand" href="#">Our Products</a>
          {/* Вставляем кнопку Logout рядом с названием */}
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;