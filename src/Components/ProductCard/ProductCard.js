import React from 'react'

import './ProductCard.css'

const ProductCard = (props) => {
    const imgStyles = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div className="productcard">
                <div className="productcard__image" style={imgStyles}></div>
            <div className="productcard__info">			
                <div className="productcard__title">
                    <div> <b>{ props.title }</b> </div>
                </div>
                <div className="productcard__price">
                    <div> 
                        <div className="productcard__old-price"> ${Math.round(props.oldPrice / 100)} </div> 
                        { props.price } 
                    </div>
                </div>

                <div className="productcard__colors">
                    <div className="colors__border--active">
                        <span className="colors__dot"></span>
                    </div>
                    <div className="colors__border">
                        <span className="colors__dot"></span>
                    </div>
                    <div className="colors__border">
                        <span className="colors__dot"></span>
                    </div>
                    <div className="colors__border">
                        <span className="colors__dot"></span>
                    </div>
                    <div className="colors__border">
                        <span className="colors__dot"></span>
                    </div>
                    <div className="colors__border">
                        <span className="colors__dot"></span>
                    </div>
                </div>
            </div>
		</div>
    )
}

export default ProductCard