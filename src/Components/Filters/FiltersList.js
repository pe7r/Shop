import React, { Component } from 'react'
import './FiltersList.scss'

export default class FiltersList extends Component {
  state = {
    filters: ['Size','Color','Room','Price','Material','Construction','Style'],
    boxShow: false
  }

  showBox = () => {
    this.setState(prevState => {
      return {boxShow: !prevState.boxShow}
    })
  }
  render() {
    const {filters, boxShow} = this.state;
    let filtersList = filters.map(filter => {
      let active = '';
      if (boxShow) {
        active = 'active'
      }
      return (
        <div key={filter}>
          <button 
            className="filters__button"
            onClick={this.showBox}> 
            {filter} 
          </button>
          <div className={`filters__box ${active}`}> Many variants </div>
        </div>
      )
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
