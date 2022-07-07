import React from "react"
import { shallow } from "enzyme"
import GitExpertApp from "../../components/GifExpertApp"

describe('Pruebas en el componente GitExpertApp', () => { 
    test('Debe mostrarse correctamente', () => { 
        const app = shallow(<GitExpertApp/>)    
        expect( app ).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => { 
        //Creo un array el cual se le pasara a mi componente
        const categories = ['One Punch', 'Dragon Ball'];
        const app = shallow(<GitExpertApp
            defaultCategories={ categories }
        />);  

        //Hago el snapshot
        expect( app ).toMatchSnapshot();

        //Evaluo si el componente GifGrid esta siendo llamado el mismo numero de veces que el categories
        expect( app.find('GifGrid').length).toBe( categories.length );
    });
 })