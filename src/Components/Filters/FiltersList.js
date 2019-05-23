import React, { Component } from 'react'
import './FiltersList.scss'
import Filter from '../Filter/Filter';

export default class FiltersList extends Component {
  state = {
    filters: ['Size','Color','Room','Price','Material','Construction','Style'],
    setFilter: ''
  }

  chooseFilter = (id) => {
    this.setState({
      setFilter: id
    })
  }

  handleClickOutside = () => {
    this.setState({
      setFilter: ''
    })
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  }

  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  render() {
    const {filters, boxShow} = this.state;
    let filtersList = filters.map(filter => {
      let active = '';
      if (filter === this.state.setFilter) {
        active = 'active'
    }
      return <Filter 
              boxShow={boxShow}
              key={filter}
              filter={filter}
              active={active}
              chooseFilter={this.chooseFilter}/>
    })
    return (
        <section 
          className="filters__container"
          ref={ node => this.node = node }>
          <div className="filters__row">
            { filtersList }
          </div>
        </section>
    )
  }
}
