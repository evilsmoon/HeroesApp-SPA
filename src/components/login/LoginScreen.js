import React from 'react'

export const LoginScreen = ( {history}) => {
   
   
   const handelLogin  = ( ) => {
    
    history.push('/');

}
    return (
        
        <div className='container mt-5'>
        
            <h1> Login</h1>
            <hr />
            <button
                className="btn btn-info"
                onClick={ handelLogin }
            >
                Login
            </button>
        </div>
    )
}
