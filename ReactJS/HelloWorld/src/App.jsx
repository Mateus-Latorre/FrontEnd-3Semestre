import './App.css'
import Paragrafo from './components/paragrafo/paragrafo.jsx'
import Title from './components/Title/title.jsx'
function App() {
  return (<>
    <Title textoTitulo="Bem Vindo, sou Título"/>
    <Title textoTitulo="Eu sou outro Título"/>
    <Paragrafo textoParagrafo="Este é o meu parágrafo"/>
  </>);
}

export default App
