import React from 'react'
import {NavLink} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

import './Products.css'

class Products extends React.Component {
    render() {
        console.log(this.props.productsList)

        const productList = this.props.productsList.map(product => 
        
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
            <div>
            <section className='products__content'>
                <header className='products__header'>
                    <h1> Products </h1>
                    <NavLink to="/"> Homepage </NavLink>
                    <NavLink to="/products"> Products </NavLink>
                </header>
                <div className="products__list">
                    <div className="products__row">
                        { productList }
                    </div>
                </div>
            </section>
            </div>
        )
    }
}

export default Products