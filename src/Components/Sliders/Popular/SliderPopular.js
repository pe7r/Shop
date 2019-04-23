import React from 'react'
import {NavLink} from 'react-router-dom'
import './SliderPopular.css'
import ProductCard from '../../ProductCard/ProductCard';

const SliderPopular = (props) => {
    const productList = props.productsList.map(product => 
        
        <div className="products__col" key={product.id}>
            <ProductCard 
                title={product.title}
                description={product.description}
                key={product.id}
                image={product.mediaCollection[0].thumbUrl}
                price={product.pricing.label}
                oldPrice={product.pricing.listPrice.amount}
                /> 
        </div>
    
        )

    return (
        <div className="slider__content">
            <div className='slider__row'>
                <div className="slider__header">
                    <div className="slider__title">
                        <p> Popular </p>
                    </div>
                    <div className="slider__switch">
                        <div className="slider__navlink">
                            <NavLink to="/products" className="navlink"> See All </NavLink>
                        </div>
                        <div className="slider__buttons">
                            <button> Prev </button>
                            <button> Next </button>
                        </div>
                    </div>
                </div>
                <div className="slider__container">
                    {
                        productList
                    }
                </div>
            </div>
        </div>
    )
}

export default SliderPopular