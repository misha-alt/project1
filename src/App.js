import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import ListProductComponents from './components/ListProductComponents';
import Header from './components/HeaderComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductComponent from './components/ProductComponent';
import ManagerName from './components/ManagerName';

function App() {
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
    
  </Routes>
  
  <FooterComponents/>
  </BrowserRouter>
  </>
   
  );
}

export default App;
