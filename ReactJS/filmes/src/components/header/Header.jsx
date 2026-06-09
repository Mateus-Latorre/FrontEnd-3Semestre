import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";
import Botao from "../botao/Botao";
import { EmailContext } from "../../context/email/EmailContext";
import { SenhaContext } from "../../context/senha/SenhaContext";
import { useContext } from "react";
import Porta from "/public/Porta.png"
import Icone from "/public/icone.png"

const Header = () => {
    const { email, setEmail } = useContext(EmailContext);
    const { senha, setSenha } = useContext(SenhaContext);
const sair = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("senha");
    setEmail(null);
    setSenha(null);
}
    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/Filme">Filme</Link>
                    <Link className="link_header" to="/Genero">Gênero</Link>
                    <img src={Icone} alt="Icone de Usuario"/>
                    <img src={Porta} alt="Icone de Porta" onClick={() => {sair()}}/>
                </nav>
            </div>
        </header>
    )
}

export default Header;