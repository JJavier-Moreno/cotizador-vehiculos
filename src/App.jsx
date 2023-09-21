import AppSeguro from './components/AppSeguro'
import { CotizadorProvider } from './context/CotizadorProvider' //Este va a envolver todos los componentes, que serán los children

function App() {

  return (
    <CotizadorProvider> 
  <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
