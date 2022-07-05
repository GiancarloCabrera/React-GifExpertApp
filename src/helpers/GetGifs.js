//HELPERS
//Son archivos donde guardan funciones que hacen peticiones http a las api

//Funcion asincrona, espera que corra una cosa para que corra la sgte
export const getGifs = async( category ) => {
    console.log('LA CATEGORIA: ', category)
    //Esta es la url que se obtiene una vez accedimos al api usando el api_key por medio del Postman
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=aNxQLUPSsPS9xOY2ax1CS3LHOh0cOgVT`;
            //Se le agrega el https y si hay espacios se pone +  // encodeURI para quietarle los espacios
     
    //Son await porque la funcion es asincrona y para que esperen hasta que sea su turno
    const resp = await fetch( url );
                        //Este json toma el objeto gigante de json que da la API y lo transforma a un objeto javascriot
    
    //Desestructuramos porque lo que nos interesa es data
    const { data } = await resp.json();

    //Creo un objeto con los valores del objeto data que me interesan
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
                        //Se pone el signo de interrogacion para ver si viene undefined y evitar el error
        }
    })

    console.log("GIFSSSSSSS:",gifs);

    //Llamammos el setImages y como parametro ponemos el gifs
    return gifs;
}