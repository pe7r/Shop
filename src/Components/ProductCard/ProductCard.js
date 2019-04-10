import React from 'react'

import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className="productcard">
			<div className="productcard__image">
                <img src={props.image} alt="product" />
            </div>			
            <div className="productcard__title">
            <h2> { props.title } </h2>
            </div>
            <div className="productcard__price">
            <h3> { props.price } </h3>
            </div>
            <div className="productcard__colors">
            <h3> Colors here </h3>
            </div>
		</div>
    )
}

export default ProductCard