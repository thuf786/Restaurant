import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Restview from './pages/Restview';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    Restaurant
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Restaurantview/:id' element={<Restview/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
