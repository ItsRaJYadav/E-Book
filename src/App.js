import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Global/Navbar';
import Footer from './component/Global/Footer';
import './App.css';

const Home = lazy(() => import('./component/Screens/Home'));
const About = lazy(() => import('./component/Screens/About'));

function App() {
  return (
    <>
      <BrowserRouter>
        

        <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
          <Routes>
            <Route path="/about" element={<About />} exact />
            <Route path="/" element={<Home />} exact />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
