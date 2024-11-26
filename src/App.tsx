import Cabecalho from "./components/Cabecalho/Cabecalho"
import Hero from "./components/Hero/Hero"
import ListaVagas from "./containers/ListaVagas/ListaVagas"

import GlobalStyle from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Cabecalho />
        <Hero />
        <ListaVagas />
      </div>
    </>
  )
}
export default App
