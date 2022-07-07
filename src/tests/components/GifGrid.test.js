import React from "react";
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';

//Con este jest.mock fingimos el funcionamiento de esa funcion que es un hook
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas componente GifGrid', () => { 

    const category = 'Shadow Hunters';

    test('El componente debe ser mostrado de manera correcta', () => { 
        //Hacemos un llamdo de la funcion y hacemos que retorne este objeto
        //Cabe recordar que la funcion requiere devolver algo, por eso se 
        // esta llamando el mockReturnValue
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const app = shallow(<GifGrid category={ category }/>);
        expect( app ).toMatchSnapshot();
    });    

    test('Debe de mostrar items cuando se cargan imagenes, useFetchGifs', () => { 
        
        //Con esto fingimos que se haya llamado la funcion y haya retornado esto
        const gifs = [{
            id: 'ABC',
            url: 'https://noon.com',
            title: 'HEYYYYYYY'
        },
        {
            id: 'CDJ',
            url: 'https://lalalal.com',
            title: 'OEEEEEEEE'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const app = shallow(<GifGrid category={ category }/>);

        //Evaluar que el componente se esta mostrando bien
        expect( app ).toMatchSnapshot();

        //Solo hay un parrafo y solo aparece si loading esta en true, por ende
        // no debe aparecer porque loading es false por defecto
        //Asi se evalua
        expect( app.find('p').exists() ).toBe(false);

        //Evaluar si el componente esta recibiendo el mismo numero de 
        // objetos que la funcion useFetch esta retornando
        //Se busca el componente en el html y se espera que tenga el mismo tmaano que el array que yo le estoy pasando
        expect( app.find('GifGridItem').length).toBe( gifs.length );
    });
})