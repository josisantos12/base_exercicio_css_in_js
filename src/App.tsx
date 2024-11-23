import Cabecalho from "./components/Cabecalho/Cabecalho"
import Hero from "./components/Hero/Hero"
import ListaVagas from "./containers/ListaVagas/ListaVagas"

import "./global.css"

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Hero />
      <ListaVagas />
    </div>
  )
}
export default App
