import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en componente AddCategory', () => { 
                        //jest.fn() es una manera de crear una simple funcion
                        // usando jest
    const setCategories = jest.fn();//Con esto se puede saber como, cuanto, cuando y donde
                                    // fue llamada la funcion
    let app;
    //Es importante llamar el beforeEach para que cada test sea aparte y una no afecte a la otra
    beforeEach( () => {
        jest.clearAllMocks(); //Esto sirve para que cada simulacion sea terminada y limpiada cada vez que termine
        app = shallow( <AddCategory setCategories={ setCategories } /> );

    });

    test('Mostrar de manera correcta el componente', () => { 
        expect( app ).toMatchSnapshot();
    }); 

    test('Debe de cambiar la caja de texto', () => { 
        const input = app.find('input');   
        const value = 'Hola Mundo';//Este value es el texto que se meteria en mi input
        //De esta manera se simula el onChange del input de mi componente
        input.simulate('change', { target: { value }});
                                //Este objeto va a tener el valor de e, 
                                //la cual es el argumento de la funcion
                                //handleInput en mi componente
    });

    test('No debe de postear la informacion con submit', () => { 
        //Encuentra el formulario en el componente y simula el onSubmit del formulario
        app.find('form').simulate('submit', {
            preventDefault: () => { } //Funcion que se va a evaluar la cual esta siendo llamada dentro del handleSubmit
        });
        //Se espera que setCategories no sea llamado porque en el input no
        // se le esta pasando nada
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => { 
        const value = 'Hola Mundo';

        //Simulacion del input
        app.find( 'input').simulate('change', { target: { value } } );

        //Simulacion del submit
        app.find( 'form' ).simulate('submit', { preventDefault: () => { } } );

        //Se espera que el setCategories haya sido llamado
        expect( setCategories ).toHaveBeenCalled();
        
        //Se espera que que setCategories haya sido llamado como una funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //Se espera que el valor del input sea value
        expect(app.find('input').prop('value')).toBe(value)
    });
});