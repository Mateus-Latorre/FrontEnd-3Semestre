import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './pages/homepage/homepage'
import QuemSomosPage from './pages/quemsomospage/quemsomospage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from './pages/header/header'
import CadastroFrutasPage from './pages/cadastrofrutaspage/cadastrofrutaspage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<QuemSomosPage />} path="/quemsomos" />
      <Route element={<CadastroFrutasPage />} path="/cadastrofrutas" />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
