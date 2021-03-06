import React from 'react'
import PropTypes from 'prop-types'

import './ProductCard.scss'

class ProductCard extends React.Component {
    static defaultProps = {
        theme: ''
    }
    state = {
        colors: ['black', 'blue', 'brown','red', 'orange'],
        setColor: 'black'
    }

    chooseColor = (id) => {
        this.setState({
            setColor: id
        })
    }

    render() {
        const { theme, title, oldPrice, price, image, placeInList} = this.props;
        const { colors, setColor } = this.state;

        const imgStyles = {
            backgroundImage: `url(${image})`
        }

        let colorsList = colors.map(color => {
            let active ='';
            if (color === setColor) {
                active = 'colors__border--active'
            }
            return (
                <div 
                    key={color}
                    className={`colors__border ${active}`} 
                    onClick={() => this.chooseColor(color)}>
                    <span className="colors__dot" style={{'backgroundColor': color}}></span>
                </div>
            )
        
        }) 

        return (
            <div className={`productcard ${theme}`}>
                    <div className="productcard__image" style={imgStyles}></div>
                <div className="productcard__info">			
                    <div className="productcard__title">
                        <span id={`product${placeInList}`}> { title } </span>
                    </div>
                    <div className="productcard__price">
                        <span> 
                            <span className="productcard__old-price"> ${Math.round(oldPrice / 100)} </span> 
                            { price } 
                        </span>
                    </div>

                    <div className="productcard__colors">
                        { colorsList }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired
};