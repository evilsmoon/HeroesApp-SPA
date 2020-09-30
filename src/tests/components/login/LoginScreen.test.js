import '@testing-library/jest-dom';
import React from 'react';
import { mount} from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';
describe('Test LoginScreen.js ', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    }
    const history = {
        replace:jest.fn()
    }
    const wrapper = mount(<AuthContext.Provider
        value={contextValue}
    >
        <LoginScreen  history={history}/>
    </AuthContext.Provider>)
    test('debe de mostrarse correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();
    });
    test('debe de realizar el dispath y la navegacion ', () => {


        const handelClick = wrapper.find('button').prop('onClick');
        
        handelClick();
        expect( contextValue.dispatch).toHaveBeenCalledWith({
            type:types.login,
            payload:{
                name:'Gabriel'
            }
        });
        expect( history.replace ).toHaveBeenCalledWith('/');
        
        localStorage.setItem('lastpath','/dc');
        handelClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');

    });

})
