import React, { Component } from 'react'
import './FiltersList.scss'
import Filter from '../Filter/Filter';
import filtersData from '../filtersData'

export default class FiltersList extends Component {
  state = {
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
    const {boxShow} = this.state;
    const buttons = Object.keys(filtersData).map((key) => {
      let active = '';
      if (key === this.state.setFilter) {
          active = 'active' 
      }
      return <Filter key={key}
                     name={key}
                     filterData={filtersData[key]}
                     chooseFilter={this.chooseFilter}
                     boxShow={boxShow}
                     active={active}
                     />
    });

    return (
        <section 
          className="filters__container"
          ref={ node => this.node = node }>
          <div className="filters__row">
            {buttons}
          </div>
        </section>
    )
  }
}
