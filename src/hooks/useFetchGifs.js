// HOOKS
//Se pone useFetch en el nombre del archivo para saber que es un hook

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs"
                        //IMPORTANTEEEEEEEEEEEE
                        //Como no es un componente sino una funcion, no usamos desestructuracion a menos que los necesitemos
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState( {
        data: [],
        loading: true
    })

    //useEffect
    //Voy a implementar useEffecto debido a que quiero que la la request http
    // solo corra una sola vez
    //No hay argumentos en el useEffect asi se vayan a usar adentro
    useEffect( () => { //Los efectos no pueden ser async
        getGifs( category ).then( imgs => {
            //imgs trae toda la data de la api requerida por el usuario
            //Llamamos setState para cambiar el estado del objeto state
            setState({
                //Una vez cargado cambiamos los estados del objeto
                data: imgs, //La data sera las imagenes que trae nuestra request http
                loading: false //Como ya llegan las fotos, debe dejar de cargar
            });
        })
    },[ category ])//Arreglo de dependencias

    return state;
}