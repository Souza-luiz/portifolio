import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

import Home from './pages/home.jsx';
import Contato from './pages/contato.jsx';
import Projetos from './pages/projetos.jsx';
import Projeto from './pages/projeto.jsx';

function App() {


  return (
    <Router>
      <div id='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eu" element={<Contato />} />
          <Route path="/amo_a" element={<projeto />} />
          <Route path="/minha_mulher" element={<Projetos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App