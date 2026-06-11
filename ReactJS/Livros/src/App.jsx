import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import api from '../services'

function App() {
 const [nome, setNome] = useState('');
 const [autor, setAutor] = useState('');
 const [ano, setAno] = useState('');
 const [livros, setLivros] = useState([]);
 useEffect(() => {
   getLivros();
 },[])
 const getLivros = async () => {
  try {
    const retornoAPI = await api.get("/Livro")
    const dados = retornoAPI
    setLivros(dados);
  } catch (error) {
    console.log(error)
  }
  const objCadastro = {
   Nome: nome,
   Autor: autor,
   Ano: ano
  }
  const cadastrar = async () => {
    try {
      const retornoAPI = await api.post("/Livro", objCadastro);
      getLivros();
    } catch (error) {
      console.log(error)
    }
  }
  const deletar = async (item) =>{
    try {
      const retornoAPI = await api.delete(`/Livro/${item.id}`)
      getLivros();
    } catch (error) {
      console.log(error)
    }
  }
 }

  return (
    <>
     <h1>Site De Livros</h1>
     <h2>Nome</h2>
     <input type="text" placeholder='Digite o nome do Livro'/>
     <h2>Autor</h2>
     <input type="text" placeholder='Digite o nome do Autor'/>
     <h2>Ano</h2>
     <input type="text" placeholder='Digite o ano do Livro'/>
     <button className='botao'>Cadastrar</button>
     </>
  )
}

export default App
