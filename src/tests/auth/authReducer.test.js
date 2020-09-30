import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';
describe('test authReducer.js', () => {

    // const state = {
    // name:'gabriel',
    // logged:true
    // }


    test('debe de retornar el estado por defecto ', () => {

        const state = authReducer({ logged: false }, {})

        expect(state).toEqual({ logged: false });

    });
    test('debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type:types.login,
            payload:{
                name: 'gabriel',
            }
        }
        const state = authReducer({logged:false}, action)
        // console.log(state)
        expect(state).toEqual({ 
            name: 'gabriel',
            logged: true });
        

    });
    test('debe de autenticar y colocar el name del usuario  y logged : false ', () => {

        const action = {
            type:types.logout,
        }
        const state = authReducer({logged:true,name :'Pedro'}, action)
        // console.log(state)
        expect(state).toEqual({ 
            logged: false });
        

    });
    
})
