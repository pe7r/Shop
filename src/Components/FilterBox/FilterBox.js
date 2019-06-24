import React from 'react'
import './FilterBox.scss'

const FilterBox = ({filter, handleBoxChoice, boxActive}) => {
  return (
        <button
          className={`box__button ${boxActive}`}
          name={filter.id}
          onClick={
            () => handleBoxChoice(filter.id)
          }
          > {filter.title}
        </button>
  )
}

export default FilterBox
