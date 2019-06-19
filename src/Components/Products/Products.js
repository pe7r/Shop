import React from 'react'
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'
import FiltersList from '../Filters/FiltersList'
import Pagination from '../Pagination/Pagination'
import Header from '../Header/Header';
import Loader from '../Loader/Loader'
import Sort from '../Sort/Sort';

class Products extends React.Component {
    render() {
        const { productsList, actualPage, totalCount, changingPage, onFilterProducts, isLoading, onSortProducts, actualSort } = this.props;

        const productList = productsList.map(product => {
            return (
            <div className="products__col" key={product.id}>
                <ProductCard 
                    placeInList={productsList.indexOf(product)}
                    title={product.title}
                    description={product.description}
                    key={product.id}
                    image={product.mediaCollection[0].thumbUrl}
                    price={product.pricing.label}
                    oldPrice={product.pricing.listPrice.amount}
                    /> 
            </div>)
        }
            )

        return (
            <div className="products__container">
                <header>
                    <Header />
                    <div className="products__filters">
                        <FiltersList onFilterProducts={onFilterProducts} />
                    </div>
                </header>
                 { isLoading ? <Loader /> :
                    <React.Fragment>
                        <section className='products__content'>
                            <div className="products-content__header">
                                <div className="products-content-header__left">
                                    {totalCount} Rugs
                                </div>
                                <div className="products-content-header__right">
                                    <div className="content-heander__choosedfilters"> Choosed Filters </div>
                                    <Sort onSortProducts={onSortProducts}
                                          actualSort={actualSort}/>
                                </div>
                            </div>
                            <div className="products__list">
                                <div className="products__row">
                                    { productList }
                                </div>
                            </div>
                            <Pagination actualPage={actualPage}
                                        totalCount={totalCount}
                                        changingPage={changingPage}/>
                        </section>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Products

Products.propTypes = {
    productsList: PropTypes.array.isRequired,
};