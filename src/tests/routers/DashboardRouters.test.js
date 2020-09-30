import '@testing-library/jest-dom'
import React from 'react';
import { mount } from 'enzyme';
import { DashboardRouters } from '../../routers/DashboardRouters';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';


describe('test DashboardRouters.js', () => {
    // 
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }

    test('debe de mostrarse correctamente', () => {


        const wrapper = mount(

            <AuthContext.Provider
                value={ contextValue }
            >
                <MemoryRouter>
                    <DashboardRouters />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.text-secondary').text().trim() ).toBe('Pedro');
    })

})
