import { renderHook } from "@testing-library/react"
import { useFetchGifs } from "../../../hooks/useFetchGifs"
import '@testing-library/jest-dom';
//PARA EVALUAR HOOKS USEMOS ESTA LIBRERIA react-hooks-testing-library, Hay que instalarla

describe('Pruebas en el hook useFetchGifs', () => { 
    test('Debe de retornar el estado inicial', async () => { 
        //const { data, loading } = useFetchGifs( 'One Punch' );
        
        //CON ESTO ACCEDO AL OBJETO QUE ESTA EN EN EL HOOK USESTATE

        //Esta funcion renderiza un hook
        //Esto trae un objeto, pero solo me interesa el result, por eso lo desestructuro
                                //Esta promesa se encarga de mostrar cuando hay un cambio en mi hook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
                                //Hay que llamar una funcion anonima 1ero

        const { data, loading } = result.current;//El dato del momento de result
        
        //Espera a que waitForNextUpdate corra
        await waitForNextUpdate();
        
        console.log( data, loading );

        //Se espera que la data sea un array vacio
        expect( data ).toEqual([]);
        //Se espera que loading este en true
        expect( loading ).toBe(true);
    });
    
    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => { 
                        //Esta promesa se encarga de mostrar cuando hay un cambio en mi hook
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ))

        //Espera a que waitForNextUpdate corra
        await waitForNextUpdate();

        const { data, loading } = result.current;
        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
    })
 })