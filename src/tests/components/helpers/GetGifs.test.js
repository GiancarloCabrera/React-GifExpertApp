import { getGifs } from "../../../helpers/GetGifs"

describe('Pruebas al helper GetGifs', () => { 
    
    //Como el helper es asincrono y sus variables son await
    //Las pruebas tambien lo seran
    test('Debe de traer 10 elementos', async() => { 
        const gifs = await getGifs('One Punch');
        //gifs es un array con 10 imagenes relacionadas con el parametro enviado 
        expect( gifs.length ).toBe(10);
    });

    test('Debe de estar el array vacio si no se manda ninguna categoria', async() => { 
        const gifs = await getGifs('');
        //gifs es un array con 10 imagenes relacionadas con el parametro enviado 
        expect( gifs.length ).toBe(0);
    })
})