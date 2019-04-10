import React from 'react'

import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className="productcard">
			<div>
                <img src={props.image} alt="product" />
            </div>			
            <div></div>
			<h2> { props.title } </h2>
            <h3> { props.price } </h3>
		</div>
    )
}

export default ProductCard