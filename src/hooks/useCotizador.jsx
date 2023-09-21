import {useContext} from 'react'
import CotizadorContext from '../context/CotizadorProvider'

const useCotizador = () => {
  return useContext(CotizadorContext)  //Aqui ya obtiene todo lo que este en value del Cotizador.Provider
  
}

export default useCotizador