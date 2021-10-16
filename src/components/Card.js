import React from 'react';
import './Card.css'

const Card = ({children, img, name, price, type}) => {
    return (
        <div className="card-root">
            <div className="image"><img src={img} alt={name} className="img"/></div>
            <h4 className="title">{name}</h4>
            <h6 className="type">{type}</h6>
            <h3 className="price">{price} zł/kg</h3>
            <div className="buttons">{children}</div>
        </div>
    )
}

export default Card;