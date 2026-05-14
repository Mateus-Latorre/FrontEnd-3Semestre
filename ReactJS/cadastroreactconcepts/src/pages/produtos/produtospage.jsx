import "./produtospage.css";
import imagem from "../../assets/hero.png";
import { useState } from "react";
const Produtos = () => {
    const [listaProdutos, setListaProdutos] = useState([
        {id: 1, nome: 'Bomba', descricao: 'Bomba legal', preco: 67.67, imagem: imagem},
        {id: 1, nome: 'Bomba', descricao: 'Bomba legal', preco: 67.67, imagem: imagem},
        {id: 1, nome: 'Bomba', descricao: 'Bomba legal', preco: 67.67, imagem: imagem},
    ]);

    return (
        <main className="produtos">
            <h1 className="texto-produto">Cadastro de Produtos</h1>
            <div className="div-cadastro">
                <form action="" className="cadastro-formulario">
                    <input className="input-formulario" type="text" placeholder="Nome do Produto" />
                    <input className="input-formulario input-descricao" type="text" placeholder="Descrição" />
                    <input className="input-formulario" type="number" placeholder="Preço" />
                    <label className="label_upload" htmlFor="arquivo">Imagem do Produto</label>
                    <input className="input-formulario btn_upload" id="arquivo" type="file" placeholder="Imagem do Produto" />
                    <button className="btn_cadastrar">Cadastrar</button>
                </form>
                <div className="div-produto">
                <section className="secao-produto">
                    <article className="card__produto">
                        <img src={imagem} className="img_produto"/>
                        <span><strong>Nome:</strong>Bomba</span>
                        <span><strong>Descrição:</strong>Bomba legal</span>
                        <span><strong>Preço:</strong>R$67,67</span>
                    </article>
                </section>
                </div>
            </div>
        </main>
    );
};

export default Produtos;