import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Test SearchScreen.js', () => {


    test('debe mostrarse corretamente con valores por defecto', () => {
        const wrapper = mount(<MemoryRouter initialEntries={['/search']}>
            <Route path='/search' component={SearchScreen} />
        </MemoryRouter>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').text().trim()).toBe('Search a hero')
    });

    test('debe de mostrar a Batman y el input con el valor del queryString0', () => {
        const wrapper = mount(<MemoryRouter initialEntries={['/search?q=batman ']}>
            <Route path='/search' component={SearchScreen} />
        </MemoryRouter>);

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar un error si no se encuentra el hero', () => {
        const nameHero = 'batman123';
        const wrapper = mount(<MemoryRouter initialEntries={[`/search?q=${nameHero}`]}>
            <Route path='/search' component={SearchScreen} />
        </MemoryRouter>);

        expect(wrapper.find('.alert').text().trim()).toEqual(`There is no a hero with ${nameHero}`)
        // console.log(wrapper.find('.alert').text().trim())      
    });
    test('debe de llamar el push de; history', () => {
        const nameHero = 'batman123';

        const history = {
            push: jest.fn()
        }
        const wrapper = mount(<MemoryRouter initialEntries={[`/search?q=${nameHero}`]}>
            <Route path='/search' component={()=><SearchScreen history={history}/>} />
        </MemoryRouter>);

        wrapper.find('input').simulate('change',{
            target:{
                name:'hero',
                value:'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)
})




})
