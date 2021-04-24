import React from 'react';

import './card-style.css';

const Card = (props) => {
    const { name, id, email } = props;

    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;