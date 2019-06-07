import React, { Component } from 'react'
import './FilterBox.scss'

export default class FilterBox extends Component {
  state = {
    active: false
  }
    render() {
        const {
          filter,
          handleBoxChoice
        } = this.props;
        const {active} = this.state;

        let styles;
        if (active) {
          styles = {
            backgroundColor : 'green',
            color: 'white'
          }
        }
        return (
            <div>
              <button
                      className='box__button'
                      style={styles}
                      onClick={() => {
                        this.setState(prevState => {
                          return { active: !prevState.active }
                        })
                        handleBoxChoice(filter.title)
                      }}
                      > {filter.title}
              </button>
            </div>
        )
    }
}
