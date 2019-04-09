import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Product from '../Product'

class Category extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get('https://qa-api.wovenlyrugs.com/products?page=1&page_size=35&size=runners&group=Rug')
        .then(response => {
            console.log(response)
            this.setState({ products: response.data.result.data })
        })
    }

    render() {

        const productList = this.state.products.map(product => <Product 
            title={product.title}
            description={product.description}
            key={product.id}
            image={product.mediaCollection[0].thumbUrl}
            />)

        return (
            <section>
                <h1> Category </h1>
                <NavLink to="/"> Homepage </NavLink>
                <NavLink to="/category"> Category </NavLink>
                { productList }
            </section>
        )
    }
}

export default Category