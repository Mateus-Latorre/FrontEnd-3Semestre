import "./produtospage.css";
const Produtos = () => {
    return (
        <body className="produtos">
        <h1 className="texto-produto">Página de Produtos</h1>
        <form action="">
            <h1>Cadastro de Produtos</h1>
            <input type="text" placeholder="Nome do Produto" />
            <input type="text" placeholder="Descrição" />
            <input type="file" placeholder="Imagem"/>
        </form>
        </body>
    );
};

export default Produtos;