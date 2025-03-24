import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './routes/Error';

import Home from './routes/Home';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Sobre from './routes/Sobre'
import PaginaProdutos from './routes/PaginaProdutos';

function App() {

  return (
    
      <BrowserRouter>
       <Nav/>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<PaginaProdutos />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
       <Footer/>
      </BrowserRouter>
  
  )
}

export default App