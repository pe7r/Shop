import React from 'react'
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'
import Filters from '../Filters/Filters'

class Products extends React.Component {
    render() {
        const { productsList } = this.props;

        const productList = productsList.map(product => 
        
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
            <div className="products__container">
                <header className='products__header'>
                    <h1> Products </h1>
                    <NavLink to="/"> Homepage </NavLink>
                    <NavLink to="/products"> Products </NavLink>
                    <div className="products__filters">
                        <Filters />
                    </div>
                </header>
                 
                <section className='products__content'>
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

Products.propTypes = {
    productsList: PropTypes.array.isRequired,
};