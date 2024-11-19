import Cabecalho from './Cabecalho.tsx'
import FormVagas from './FormVagas.tsx'
import Hero from './Hero.tsx'
import Vaga from './Vaga.tsx'
import ListaVagas from './ListaVagas'

function App() {    
    return (
        <div className="App">
        <Cabecalho />
        <Hero />
        <FormVagas />
        <ListaVagas />
        </div>
    )
}
export default App;