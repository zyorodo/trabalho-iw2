// Importa componentes do React Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Importa as páginas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Serviços from "./pages/Serviços";

// Componente principal da aplicação
function App() {
  return (
    <Router>
      {/* Navegação com links para as páginas */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/servicos">Serviços</Link>
      </nav>
      
      {/* Define as rotas da aplicação */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Serviços />} />
      </Routes>
    </Router>
  );
}

export default App;
