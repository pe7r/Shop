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
                <h1> Category </h1>
                <NavLink to="/"> Homepage </NavLink>
                <NavLink to="/category"> Products </NavLink>
                { productList }
            </section>
        )
    }
}

export default Products