import React, { Component } from 'react'
import '/Colors.scss'

export default class Colors extends Component {
  render() {
    const { colors } = this.props;
    let colorsList = colors.map(color => {
        return (
            <div className="colors__border--active">
                <span className="colors__dot"></span>
            </div>
        )
    
    }) 

    return (
      <div className="colors__row">
        {colorsList}
      </div>
    )
  }
}