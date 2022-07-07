import React from "react";
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
describe('Pruebas en componente GifGridItem', () => {
    const obj = {
        title: 'un titulo',
        url: 'https://localhost:3000'
    };
    const app = shallow(
        <GifGridItem img={ obj }/>
    );

    test('Mostrar el componente de forma correcta', () => {
        expect( app ).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el title', () => { 
        //p va a ser el parrado que se encuentre en GifGridItem
        const p = app.find('p');
        //Se espera que p (el parrafo), sin espacios al inicio y final,
        // sea igual a el titulo del objeto que se creo arriba
        expect(p.text().trim()).toBe(obj.title);       
    });

    test('Debe tener la imagen igual al url y alt de los props', () => { 
        const img = app.find('img');
        //Ver todas las propiedades
        console.log(img.props());
        //Ver una propiedad en especifico
        console.log(img.prop('src'));
        //Se espera que la img en su propiedad arc sea igual a la propiedad del objeto url
        expect(img.prop('src')).toBe(obj.url); 
        //Lo mismo con alt   
        expect(img.prop('alt')).toBe(obj.title);   
    });

    test('Debe tener la misma clase en el div', () => { 
        const div = app.find('div');
        const className = 'card animate__animated animate__bounce';
        expect(className).toBe(div.prop('className'));
     })
}) 