import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../client/pages/home';
import Navbar from '../client/components/navbar';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  
          
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
