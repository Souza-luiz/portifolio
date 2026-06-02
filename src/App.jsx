import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Projetos from "./pages/projetos";
import Projeto from "./pages/projeto";
import Contato from "./pages/contato";

function App() {
  return (
    <Router>
      <Header />

      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projeto/:id" element={<Projeto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;