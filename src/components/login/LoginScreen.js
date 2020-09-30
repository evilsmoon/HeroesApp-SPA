import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext)
    
    const handelLogin = () => {
        
        const lastPath = localStorage.getItem('lastpath') || '/';
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Gabriel',

            }
        })
        history.replace(lastPath);

    }
    return (

        <div className='container mt-5'>

            <h1> Login</h1>
            <hr />
            <button
                className="btn btn-info"
                onClick={handelLogin}
            >
                Login
            </button>
        </div>
    )
}
