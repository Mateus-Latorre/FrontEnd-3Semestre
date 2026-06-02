import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/Usuario/UsuarioContext";

const Perfil = () => {
  const {usuario, setUsuario} = useContext(UsuarioContext);
  const [novoUsuario, setNovoUsuario] = useState();
  return (<div>
      <h2>Página do Perfil ( {usuario} )</h2>
      <input
      type="text" placeholder="digite o novo usuário" 
      onChange={(e) => {
        setNovoUsuario(e.target.value)
      }}/>
      <button
      onClick= {() => {
          setUsuario(novoUsuario)
      }}
      >Alterar nome</button>
      <p>Novo usuário: <strong>{novoUsuario}</strong></p>
</div>
  );
};

export default Perfil;