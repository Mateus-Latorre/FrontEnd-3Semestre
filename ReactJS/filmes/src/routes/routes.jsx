import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";
import Login from "../pages/login/Login";

const Rotas = () => {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/filme" element={<CadastroFilme />} />
        <Route path="/genero" element={<CadastroGenero />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
