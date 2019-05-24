import React from 'react'
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'
import FiltersList from '../Filters/FiltersList'

class Products extends React.Component {
    render() {
        const { productsList, onPageForward, onPageBack } = this.props;

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
                        <FiltersList />
                    </div>
                </header>
                 
                <section className='products__content'>
                    <div className="products__list">
                        <div className="products__row">
                            { productList }
                        </div>
                    </div>
                    <div>
                        <button onClick={onPageBack}>
                            Back
                        </button>
                        <button onClick={onPageForward}>
                            Forward
                        </button>
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