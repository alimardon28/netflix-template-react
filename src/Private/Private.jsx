import React from 'react';
import { Outlet , Navigate } from 'react-router-dom';

const Private = ({login}) => {



    return (
        <>
        {
            login ? <Outlet/> : <Navigate to="/" />
        }

        </>
    );
}

export default Private;
