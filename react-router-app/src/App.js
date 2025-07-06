// import logo from './logo.svg';
import AboutUs from './AboutUS';
import './App.css';
// import ReactLifeCycle from './ReactLifeCycle';
import Careers from './Careers';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    /*<div>Hello! <br/>
      { <ReactLifeCycle/> }
    </div>*/
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar/>
            <Routes>
              <Route path = '/' element = {<Home/>}></Route>
              <Route path = '/aboutus' element = {<AboutUs/>}></Route>
              <Route path = '/careers' element = {<Careers/>}></Route>
              <Route path = '/contactus' element = {<ContactUs/>}></Route>
            </Routes>
          <Footer/>
        </header>
      </div>
      </BrowserRouter>
  );
}

export default App;
