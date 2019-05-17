import React, { Component } from 'react'
import './Filters.scss'

export default class Filters extends Component {
  state = {
    filters: ['size', 'color','room','price','material','construction','style']
  }
  render() {
    const {filters} = this.state;
    let filtersList = filters.map(filter => {
      return <button className="filters__button" key={filter}> {filter} </button>;
    })
    return (
        <section className="filters__container">
          <div className="filters__row">
            { filtersList }
          </div>
        </section>
    )
  }
}
