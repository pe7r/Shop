import React from 'react'

import './Product.css'

const Product = (props) => {
    return (
        <div className="product-item">
			<h2> { props.title } </h2>
			<img src={props.image} alt="product" />			
            <p> { props.description } </p>
		</div>
    )
}

export default Product