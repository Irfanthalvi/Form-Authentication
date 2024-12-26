import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Error = () => {

    const history = useNavigate();
    return (
        <>
            <div className='container'>
                <div className='error d-flex flex-colum justify-content-lg-center align-items-center'>
                    <img src='./404.png' alt='error' className='errorimg' />
                    <h4>404 Error ! page Not Found</h4>
                    <button className='btn btn-primary' onClick={() => history("/")}>Redirect login page</button>
                </div>
            </div>
        </>
    )
}

export default Error