import { useState, createContext } from "react";
import { calcularMarca, obtenerDiferenciaYear, calcularPlan, formatearCantidad } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error,setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = e => {
        setDatos({
            ...datos, //Hay que hacer una copia, porque si no reescribe lo que habia anteriormente
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () =>{
        //Base
         let resultado = 2000;
        //Diferencia de año
        const diferencia = obtenerDiferenciaYear(datos.year);
        //Hay que restar un 3% por cada año
        resultado -= ((3 * diferencia) * resultado) / 100;
        // Americano 15%
        // Europeo 30%
        // Asiatico 5%

       resultado *= calcularMarca(datos.marca);
        //Basico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan);

        resultado = resultado.toFixed(2);

        //Formatear dinero
        resultado = formatearCantidad(resultado);

        setCargando(true);
        
        setTimeout(()=>{
            setResultado(resultado)
            setCargando(false);
        },1000)

    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                error,
                setError,
                handleChangeDatos,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider //De este es de donde salen los datos
}

export default CotizadorContext;