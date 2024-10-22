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

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
  
  <>
  <BrowserRouter>
  <HeaderComponent/>
  
  <Routes>
    <Route path='/' element = {<ListProductComponents/>}></Route>
    <Route path='/product' element = {<ListProductComponents/>}></Route>
    <Route path='/add-product' element = {<ProductComponent/>}></Route>
    <Route path='/manager' element = {<ManagerName/>}></Route>
    <Route path='/productUpdate/:id' element ={<ProductComponent/>}></Route>
    
            <Route path="/login" element={<LoginComponent />} /> {/* Указываем компонент логина */}
                <Route path="/protected" element={isAuthenticated ? <LoginComponent /> : <Navigate to="/login" />} />
                <Route path="/" element={<Navigate to="/login" />} /> {/* Перенаправление для корневого URL */}
            
    
  </Routes>
  
  <FooterComponents/>
  </BrowserRouter>
  </>
   
  );
}

export default App;
