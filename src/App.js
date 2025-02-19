import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import ListProductComponents from './components/ListProductComponents';
import Header from './components/HeaderComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProductComponent from './components/ProductComponent';
import ManagerName from './components/ManagerName';
import LoginComponent from './components/LoginComponent';
import RegistrationUserComponent from './components/RegistrationUserComponet';
import CommentComponent from './components/CommentComponent';
import ListCommentComponent from './components/ListCommentComponent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []); // Эффект будет срабатывать при первом рендере, проверяя токен

  return (
    <BrowserRouter>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={isAuthenticated ? <ListProductComponents /> : <Navigate to="/login" />} />
        <Route path="/product" element={isAuthenticated ? <ListProductComponents /> : <Navigate to="/login" />} />
        <Route path="/add-product" element={isAuthenticated ? <ProductComponent /> : <Navigate to="/login" />} />
        <Route path="/manager" element={isAuthenticated ? <ManagerName /> : <Navigate to="/login" />} />
        <Route path="/productUpdate/:id" element={isAuthenticated ? <ProductComponent /> : <Navigate to="/login" />} />
        <Route path="/createUser" element={<RegistrationUserComponent />} />
        <Route path="/sendComment" element={isAuthenticated ? <CommentComponent /> : <Navigate to="/login" />} />
        <Route path="/listofcomments" element={isAuthenticated ? <ListCommentComponent /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>

      <FooterComponents />
    </BrowserRouter>
  );
}

export default App;
