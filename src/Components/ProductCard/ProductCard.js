import React from 'react'

import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className="productcard">
			<div className="productcard__image">
                <img src={props.image} alt="product" />
            </div>
            <div className="productcard__info">			
                <div className="productcard__title">
                    <div> { props.title } </div>
                </div>
                <div className="productcard__price">
                    <div> { props.price } </div>
                </div>
                <div className="productcard__colors">                   
                        <span class="colors__dot"></span>
                        <span class="colors__dot"></span>
                        <span class="colors__dot"></span>
                        <span class="colors__dot"></span>
                        <span class="colors__dot"></span>
                        <span class="colors__dot"></span>
                </div>
            </div>
		</div>
    )
}

export default ProductCard