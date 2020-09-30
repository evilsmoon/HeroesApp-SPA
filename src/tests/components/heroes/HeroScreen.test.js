import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
describe('test HeroScreen.js', () => {
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }


    test('debe de mostrase correctamente ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen
                    history={historyMock}
                />
            </MemoryRouter>
        );

        // expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Redirect').exists()).toBe(true)

    });
    test('debe de mostrar un hero si el parametro existe ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={HeroScreen} />
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
    });
    test('debe de regresar a la pantalla anterior con push', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                path='/hero/:heroeId' component={()=><HeroScreen history={historyMock}/>} />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();

        expect( historyMock.push ).toHaveBeenCalledWith('/')
        expect( historyMock.goBack ).not.toHaveBeenCalled()
    });
    test('debe de regresar a la pantalla anterior GoBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                path='/hero/:heroeId' component={()=><HeroScreen history={historyMock}/>} />
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();

        expect( historyMock.push ).toHaveBeenCalledTimes(0)
        expect( historyMock.goBack ).toHaveBeenCalled()

    });
    test('debe de llamar el redirect si el hero no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider1231546']}>
                <Route 
                path='/hero/:heroeId' component={()=><HeroScreen history={historyMock}/>} />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('')
    })
    
    
    


})
