import "./CadastroFilme.css";
import Header from "../../components/header/Header";
import Fotter from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
const CadastroFilme = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro/>
                <Lista/>
            </main>
            <Fotter />
        </>
    );
}

export default CadastroFilme;