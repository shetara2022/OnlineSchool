import './App.css';
import Header from './components/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />

        </Routes>
         

      </Router>
   </>
  );
}

export default App;
