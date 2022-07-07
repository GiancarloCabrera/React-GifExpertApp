import React from 'react'
//import { GifGridItem } from './GifGridItem';
import { PropTypes } from 'prop-types';
//import { getGifs } from '../helpers/GetGifs'; //Se importa de helpers la funcion
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //TODO ESTE CODIGO COMENTADO FUE MOVIDO A useFetchGifs DEBIDO A QUE ES UNA BUENA PRACTICA
    //ALMACENARLO EN UN HOOK

    //Creo un estado el cual sera imagenes, este recibira la info del
    // objeto gifs la cual sera mostrada por pantalla
    //const [images, setImages] = useState([]);

    //useEffect
    //Muchas veces hay codigo que necesito que corra una sola vez, asi haya cambios en el
    // en el componente. Para eso se usa el useEffect
    //En este caso react esta haciendo la request a la api cada vez que hay un camnio en el componente, y
    // yo no quiero que sea asi, necesito que solo haga la request una vez y ya, por ende voy a meter la funcion getGifs dentro
    // del hook useEffect

    // useEffect( () => {
    //     getGifs( category ).then( imgs => { //Como la funcion retorna un objeto, yo puedo acceder a el y mandarlo al setImages
    //         setImages (imgs);
    //     });
    // }, [ category ]); //Dentro de ese array van las dependencias que quiero incluir, pongo category porque cada vez que cambie quiero que ese codigo vuelva y corra

    //Esta funcion es importada del hook del archivo useFectchGifs y lo desestructuro
    const { data, loading } = useFetchGifs( category );
                        //Asi se manda una variable de este componente a otro

    return (
        <>
            <h3 className='animate__animated animate_fadeIn'>{ category }</h3>

            {/* Llamamos loading y hacemos un operador ternario,
            si loading es true muestre el parrafo, si no, no haga nada*/}
            
            { loading && <p className='animate__animated animate_flash'>LOADING</p> }

            <div className='card-grid'>
                {   //Llamamos el array data que tiene la info que queremos de la api y lo mapeamos para que mueste todo lo que queremos
                    data.map( img => {
                        //Tenemos un nuevo componente el cual esta encargado de mostrar las imagenes con sus titulos
                        return <GifGridItem 
                            key={ img.id }
                            img = { img }/>
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
