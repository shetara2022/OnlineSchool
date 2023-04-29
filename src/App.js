import './App.css';
import Header from './components/heading/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';

function App() {
  return (
   <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
         

      </Router>
   </>
  );
}

export default App;
