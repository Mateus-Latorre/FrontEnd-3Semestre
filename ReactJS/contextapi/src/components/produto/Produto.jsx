import { useContext } from "react";
import { UsuarioContext } from "../../context/Usuario/UsuarioContext";
import { CadastroProduto } from "./CadastroProduto";
import { ListarProduto } from "./ListarProduto";
import { ProdutoContext } from "../../context/Produtos/ProdutoContext";

const Produto = () => {
    const {produtos} = useContext(ProdutoContext)
    const {usuario} = useContext(UsuarioContext)
  return (<>
    <h2>Página do Produto</h2>
    <p>Bem vindo, {usuario}!</p>
    <CadastroProduto />
    <ListarProduto />
  </>);
};

export default Produto;