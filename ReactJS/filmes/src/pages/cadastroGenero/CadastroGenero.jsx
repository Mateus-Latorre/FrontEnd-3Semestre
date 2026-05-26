import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react";   
import api from "/src/services/services";

const CadastroGenero = () => {

    //states e variáveis
    const [valor, setValor] = useState("") 
    const [listaGeneros, setListaGeneros] = useState([
    ])
    const [editar, setEditar] = useState(false)
    //ciclo de vida e funções 

    //POST
   const cadastrarGenero = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0) {
        alert("Preencha o campo de Gênero");
        return;
    }

    const objCadastro = {
        Nome: valor
    };

    try {
        const retornoAPI = await api.post("/Genero", objCadastro);
        limparFormulario();
        getGeneros();

    } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("ERRO COMPLETO:", error);

    alert("Erro na chamada da API");
}
};
const limparFormulario = () => {
    setValor("");
};

const excluirGenero = async (item) => {
     try {
         const retornoAPI = await api.delete(`/Genero/${item.idGenero}`);
         getGeneros();
         limparFormulario();
} catch (error) {
         console.log("STATUS:", error.response?.status);
         console.log("DATA:", error.response?.data);
         console.log("ERRO COMPLETO:", error);
         alert("Erro na chamada da API");
     }
};

const editarGenero = async (id) => {
    alert("Editando Gênero...");
    // try {
    //     const retornoAPI = await api.put(`/Genero/${id}`);
    //     if (retornoAPI.status === 200) {
    //         alert("Cadastro editado com sucesso!");
    //         limparFormulario();
    //     } else {
    //         alert("Erro ao editar o Gênero");
    //     }
    // } catch (error) {
    //     console.log("STATUS:", error.response?.status);
    //     console.log("DATA:", error.response?.data);
    //     console.log("ERRO COMPLETO:", error);
    //     alert("Erro na chamada da API");
    // }
};

useEffect(() => {
    getGeneros();
}, [])

const getGeneros = async () => {
    try {
        const retornoAPI = await api.get("/Genero");
        const dados = retornoAPI.data;
        setListaGeneros(dados);
    } catch (error) {
        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);
        console.log("ERRO COMPLETO:", error);
        alert("Erro na chamada da API");
    }
};
    //o jsx
    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    //função que muda o state
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                />
                <Lista 
                tituloLista="Lista de Gêneros"
                visibilidade="none"
                tipoLista="genero"
                lista={listaGeneros}
                setEditar={setEditar}
                setValor={setValor}
                valor={valor}
                funcEditar={editarGenero}
                funcExcluir={excluirGenero}
                />
            </main>

            <Footer />
        </>
    );
}

export default CadastroGenero;