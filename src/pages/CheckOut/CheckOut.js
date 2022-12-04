import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const {id, name } = useLoaderData()
    return (
        <div>
            <h1 className="text-4xl">This is Checkout</h1>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h2 className="text-2xl font-semibold">{id}</h2>            
        </div>
    );
};

export default CheckOut;