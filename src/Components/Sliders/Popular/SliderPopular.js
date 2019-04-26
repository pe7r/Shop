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
                        }
                    },
                    {
                        breakpoint: 767,
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
                                <button onClick={this.previous}> Prev </button>
                                <button onClick={this.next}> Next </button>
                            </div>
                        </div>
                    </div>
                    <div className="slider__wrapper">
                        <div className="slider__container">
                            <Slider {...settings}
                                    ref={c => (this.slider = c)}
                            > 
                                { productList }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderPopular

SliderPopular.propTypes = {
    productsList: PropTypes.array.isRequired,
};