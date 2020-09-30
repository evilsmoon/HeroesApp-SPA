import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';
describe('test AppRouter.js', () => {


    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name:'Pedro'
        }
    }
    test('debe de mostrar el login si no esta auth', () => {


        const wrapper = mount(
            <AuthContext.Provider
                value={contextValue}
            >
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();

    });
    test('debe de mostrar el componente de marvel si esta auth', () => {
        const wrapper = mount(
            <AuthContext.Provider
                value={contextValue}
            >
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true);
        // console.log(wrapper.html())

    })
    

})
