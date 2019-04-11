import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../ProductCard/ProductCard'

import './Products.css'

class Products extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get('https://qa-api.wovenlyrugs.com/products?page=1&page_size=12&size=runners&group=Rug')
        .then(response => {
            console.log(response)
            this.setState({ products: response.data.result.data })
        })
    }

    render() {

        const productList = this.state.products.map(product => <ProductCard 
            title={product.title}
            description={product.description}
            key={product.id}
            image={product.mediaCollection[0].thumbUrl}
            price={product.pricing.label}
            />)

        return (
            <section>
                <h1> Products </h1>
                <NavLink to="/"> Homepage </NavLink>
                <NavLink to="/products"> Products </NavLink>
                <div className="products">
                    <div className="products__row">
                        <div className="productcard">
                            <div className="productcard__image">
                                <img src='https://www.logolynx.com/images/logolynx/43/430c07f27af3fda19373042528edbe3d.jpeg' alt="product" />
                            </div>			
                            <div className="productcard__title">
                                <h4> Name of product </h4>
                            </div>
                            <div className="productcard__price">
                                <p> Price of product </p>
                            </div>
                            <div className="productcard__colors">
                                <p> Colors here </p>
                            </div>
                        </div>
                    </div>
                    <div className="products__row">
                        <ProductCard />
                    </div>
                    <div className="products__row">
                        <ProductCard />
                    </div>
                    <div className="products__row">
                        <ProductCard />
                    </div>
                </div>
            </section>
        )
    }
}

export default Products