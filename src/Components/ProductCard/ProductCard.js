import React from 'react'

import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className="productcard">
			<div className="productcard__image">
                <img src={props.image} alt="product" />
            </div>			
            <div className="productcard__title">
            <h4> { props.title } </h4>
            </div>
            <div className="productcard__price">
            <p> { props.price } </p>
            </div>
            <div className="productcard__colors">
            <p> Colors here </p>
            </div>
		</div>
    )
}

export default ProductCard