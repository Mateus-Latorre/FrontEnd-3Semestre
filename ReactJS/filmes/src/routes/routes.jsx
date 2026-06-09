import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";
import Login from "../pages/login/Login";
import PrivateRoutes from "./PrivateRoutes";

const Rotas = () => {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/filme" element={
          <PrivateRoutes>
            <CadastroFilme />
          </PrivateRoutes>
          } />
        <Route path="/genero" element={
          <PrivateRoutes>
            <CadastroGenero /> 
          </PrivateRoutes>
          }/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
