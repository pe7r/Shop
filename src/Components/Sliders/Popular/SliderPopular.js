import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import './SliderPopular.scss'
import ProductCard from '../../ProductCard/ProductCard';
import Slider from "react-slick"

class SliderPopular extends React.Component {
    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    render() {

          const leftArrow = <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989594 6.3033 0.6967C6.01041 0.403807 5.53553 0.403807 5.24264 0.696701L0.469669 5.46967ZM21 5.25L1 5.25L1 6.75L21 6.75L21 5.25Z"
                                fill="#056551"
                                />
                            </svg>

         const rightArrow = <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75L20 6.75V5.25L0 5.25L0 6.75Z"
                                fill="#056551"
                                />
                            </svg>
        const { productsList } = this.props

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
                            <NavLink to="/products" className="navlink"> See All </NavLink>
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