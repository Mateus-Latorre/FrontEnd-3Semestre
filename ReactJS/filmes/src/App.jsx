import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import CadastroFilme from './pages/cadastroFilme/CadastroFilme'
import CadastroGenero from './pages/cadastroGenero/CadastroGenero'
import Rotas from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Rotas />
    </>
  )
}

export default App
