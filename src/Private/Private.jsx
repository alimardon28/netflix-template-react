import React from 'react';
import { Outlet , Navigate } from 'react-router-dom';

const Private = () => {


    const isLogged=true;

    return (
        <>
        {
            isLogged ? <Outlet/> : <Navigate to="/" />
        }

        </>
    );
}

export default Private;
