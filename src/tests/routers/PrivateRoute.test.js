import '@testing-library/jest-dom';
import React from 'react';
import { mount}  from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from 'react-router-dom';
describe('test <PrivateRoute/>', () => {


    const props = {
        location:{
            pathname:'/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();
    test('debe de mostrar el componente si esta auth y  guardar en el localStorage ', () => {
        const wrapper = mount(
        <MemoryRouter>

        <PrivateRoute
            isAuth={ true}
            component={ ( ) => <span>listo</span> }
            {...props}
            />
            </MemoryRouter>
            )
        
        // console.log(wrapper.html())
        expect(wrapper.find('span').exists()).toBe(true)
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastpath','/marvel')    
    });
    test('debe de bloquear el componente si no esta auth ', () => {
        const wrapper = mount(
            <MemoryRouter>
    
            <PrivateRoute
                isAuth={ false}
                component={ ( ) => <span>listo</span> }
                {...props}
                />
                </MemoryRouter>
                )
            
            // console.log(wrapper.html())
            expect(wrapper.find('span').exists()).toBe(false)
            expect( localStorage.setItem ).toHaveBeenCalledWith('lastpath','/marvel')    
    })
    


})
