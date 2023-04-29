import './App.css';
import Header from './components/heading/Header';
import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';

function App() {
  return (
   <>
      <Router>
        <Header />
          {/* <Route path='/about' element={<About />} /> */}
         

      </Router>
   </>
  );
}

export default App;
