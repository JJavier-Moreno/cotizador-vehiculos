import useCotizador from "../hooks/useCotizador"
import { MARCAS,PLANES } from "../constants";
import { useCallback,useMemo, useRef } from "react";


const Resultado = () => {

    const {resultado,datos} = useCotizador();

    const {marca,year,plan} = datos;
    const yearRef = useRef(year); //Congela el valor de year hasta que cambia 

    const [nombreMarca] = useCallback( MARCAS.filter(m  => m.id === Number(marca)), [resultado])  //Necesario para traer el objeto con ese id, Y NO CON EL ID DEL ARRAY QUE EMPIEZA POR 0,1,2
    const [nombrePLAN] = useMemo(() => PLANES.filter(p  => p.id === Number(plan)),[resultado])

    if(resultado === 0){
        return null; //Devolvemos un NUll para que no nos muestre el 0 del principio
    }
  
    return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">
            Resumen
        </h2>

        <p className="my-2"> 
            <span className="font-bold">Marca: </span>
            {nombreMarca.nombre}
        </p>

        <p className="my-2"> 
            <span className="font-bold">Plan: </span>
            {nombrePLAN.plan}
        </p>

        <p className="my-2"> 
            <span className="font-bold">Año del vehículo: </span>
            {yearRef.current}
        </p>

        <p className="my-2 text-2xl"> 
            <span className="font-bold">Total Cotización: </span>
            {resultado}
        </p>
    </div>
  )
}

export default Resultado