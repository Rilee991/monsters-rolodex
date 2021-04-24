import React from 'react';

import './card-list-style.css';
import Card from './card/card-component';

const CardList = (props) => {
    const { monsters } = props;

    return (
        <div className="card-list">
            {
                monsters.map((monster) => {
                    return (<Card key={monster.id} id={monster.id} name={monster.name} email={monster.email}/>);
                })
            }
        </div>
    );
}

export default CardList;