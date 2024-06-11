import React from 'react';

const Watch = ({watch}) => {
    const {id, name, price}= watch;
    return (
        <div>
            <h3>Model: {id} </h3> <hr />
            <h3>Brand: {name} </h3> <hr />
            <p>Price: {price} </p> <hr />
        </div>
    );
};

export default Watch;