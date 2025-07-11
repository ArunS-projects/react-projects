// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            {/* <Route path='/register' element={}></Route> */}
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
