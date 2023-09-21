export const MARCAS = [
    {id: 1, nombre: "Europeo"},
    {id: 2, nombre: "Americano"},
    {id: 3, nombre: "Asiatico"},
]

export const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(new Array(20), (valor,index) => YEARMAX - index); //Nos devuelve una lista de los ultimos 20 años

export const PLANES = [
    {id:1 , plan: "basico"},
    {id:2 , plan: "completo"},
]