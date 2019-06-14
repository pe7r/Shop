import React from 'react'
import PropTypes from 'prop-types'
import SliderPopular from '../Sliders/Popular/SliderPopular'
import './Homepage.css'
import SliderNew from '../Sliders/New/SliderNew';
import Header from '../Header/Header'
import Loader from '../Loader/Loader'

const Homepage = (props) => {
    const { isLoading, popularProducts, newProducts, onSortProducts, onFilterProducts } = props;
    return (
            <section className='homepage__container'>
                <header>
                    <Header onFilterProducts={onFilterProducts}/>
                </header>
                { isLoading ? <Loader /> :
                    <div className="homepage__content">
                        <div className="homepage__slider-popular__row">
                            <SliderPopular 
                                productsList={popularProducts}
                                onSortProducts={onSortProducts}
                            />
                        </div>
                        <div className="homepage__slider-new__row"> 
                            <SliderNew
                                productsList={newProducts}
                                onSortProducts={onSortProducts}
                            />
                        </div>
                    </div>      
                }
                            
            </section>
    )
}

export default Homepage

Homepage.propTypes = {
    productsList: PropTypes.array.isRequired,
};