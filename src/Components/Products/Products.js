import React from 'react'
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'
import FiltersList from '../Filters/FiltersList'
import Pagination from '../Pagination/Pagination'
import Header from '../Header/Header';

class Products extends React.Component {
    render() {
        const { productsList, onPageForward, onPageBack, actualPage, totalCount } = this.props;

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
                <header>
                    <Header />
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
                    <Pagination onPageBack={onPageBack}
                                onPageForward={onPageForward}
                                actualPage={actualPage}
                                totalCount={totalCount}/>
                </section>
            </div>
        )
    }
}

export default Products

Products.propTypes = {
    productsList: PropTypes.array.isRequired,
};