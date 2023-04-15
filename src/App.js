// import logo from './logo.svg';
import Navbar from '../src/component/Global/Navbar';
import './App.css';
import Footer from './component/Global/Footer';
import About from './component/Screens/About';
import Home from './component/Screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path="/about" element={<About />} exact/>
        <Route path="/" element={<Home />} exact/>
          
          
        </Routes>


        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
