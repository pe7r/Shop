import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductCard from '../../ProductCard/ProductCard';
import Slider from "react-slick"
import '../SliderStyles.scss';
import { leftArrow, rightArrow } from '../../Icons/Icons'
import ServiceApi from '../../../ServiceApi'

class SliderNew extends React.Component {
    state = {
        newProducts: []
    }
    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    componentDidMount() {
        ServiceApi.getNewProducts()
        .then(productsData => {
          this.setState({
            newProducts: productsData.data.result.data
          })
        })
        }

    render() {
        const { onSortProducts } = this.props;
        const { newProducts } = this.state;

        const productList = newProducts.map(product => 
            
            <div className="slider__col" key={product.id}>
                <ProductCard 
                    title={product.title}
                    description={product.description}
                    key={product.id}
                    image={product.mediaCollection[0].thumbUrl}
                    price={product.pricing.label}
                    oldPrice={product.pricing.listPrice.amount}
                    theme='new'
                    /> 
            </div>
        
            )

            const settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                draggable: false,
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            speed: 1000
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            speed: 1000
                        }
                    }
                ]
            }

        return (
            <div className="slider__content">
                <div className="slider__header">
                    <div className="slider__title">
                        <p> New </p>
                    </div>
                    <div className="slider__switch">
                        <div className="slider__navlink">
                            <NavLink to="/products"
                                     className="navlink"
                                     onClick={() => onSortProducts('new_arrival', 'New Arrival')}
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

export default SliderNew

SliderNew.propTypes = {
    onSortProducts: PropTypes.func.isRequired,
};