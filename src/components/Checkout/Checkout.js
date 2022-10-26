import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutInfo = useLoaderData();
    return (
        <div>
            <h1 className="text-2xl font-bold">{checkoutInfo.name}</h1>
        </div>
    );
};

export default Checkout;