import { useState } from "react"
import "./App.css"
import Contador from "./components/contador/contador" 

function App(){
  const[nome, setNome] = useState("Google")
  function trocarTexto(){
  setNome("Microsoft")
  }
function fuiAbandonado(){
  setNome("Input foi abandonado :(")
}
  return(
    <>
    <h1>{nome} Page</h1>
    <button onClick={trocarTexto}>Mudar Texto</button>
    <button onClick={() => {
      return setNome(prompt("Digite o nome da página"))
    }}>Mudar Texto</button>
    <br />
    <input type="text" onBlur={fuiAbandonado} onChange={(e) => setNome(e.target.value)}/>
    <Contador />
    </>
  )
}

export default App;