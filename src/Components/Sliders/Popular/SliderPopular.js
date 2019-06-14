import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import '../SliderStyles.scss';
import ProductCard from '../../ProductCard/ProductCard';
import Slider from "react-slick"
import { leftArrow, rightArrow } from '../../Icons/Icons'

class SliderPopular extends React.Component {
    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    render() {
        const { productsList, onSortProducts } = this.props

        const productList = productsList.map(product => 
            
            <div className="slider__col" key={product.id}>
                <ProductCard 
                    title={product.title}
                    description={product.description}
                    key={product.id}
                    image={product.mediaCollection[0].thumbUrl}
                    price={product.pricing.label}
                    oldPrice={product.pricing.listPrice.amount}
                    theme='popular'
                    /> 
            </div>
        
            )

            const settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 6,
                draggable: false,
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                            speed: 1000
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                        }
                    }
                ]
            }

        return (
            <div className="slider__content">
                <div className="slider__header">
                    <div className="slider__title">
                        <p> Popular </p>
                    </div>
                    <div className="slider__switch">
                        <div className="slider__navlink">
                            <NavLink to="/products"
                                     className="navlink" 
                                     onClick={() => onSortProducts('bestseller', 'Best Seller')}
                                     > See All 
                            </NavLink>
                        </div>
                        <div className="slider__buttons">
                            <button onClick={this.previous} className="button-left"> {leftArrow} </button>
                            <button onClick={this.next} className="button-right"> {rightArrow} </button>
                        </div>
                    </div>
                </div>
                <div className="slider__slider-container">
                    <Slider {...settings}
                            ref={c => (this.slider = c)}
                    > 
                        { productList }
                    </Slider>
                </div>
            </div>
        )
    }
}

export default SliderPopular

SliderPopular.propTypes = {
    productsList: PropTypes.array.isRequired,
};