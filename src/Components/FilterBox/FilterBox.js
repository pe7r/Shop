import React, { Component } from 'react'
import './FilterBox.scss'

export default class FilterBox extends Component {
    render() {
        const {
          filter,
          handleBoxChoice,
          boxActive
        } = this.props;

        return (
            <div>
              <button
                      className={`box__button ${boxActive}`}
                      onClick={
                        () => handleBoxChoice(filter.id)
                      }
                      > {filter.title}
              </button>
            </div>
        )
    }
}
