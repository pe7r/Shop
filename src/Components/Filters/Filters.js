import React, { Component } from 'react'
import './Filters.scss'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <section className="filters__container">
            <button className="filters__button"> Filter 1 </button>
            <button className="filters__button"> Filter 2</button>
        </section>
      </div>
    )
  }
}
