import React from 'react'
import './FilterBox.scss'

const FilterBox = ({filter, handleBoxChoice, boxActive}) => {
  return (
      <div>
        <button
                className={`box__button ${boxActive}`}
                name={filter.id}
                onClick={
                  () => handleBoxChoice(filter.id)
                }
                > {filter.title}
        </button>
      </div>
  )
}

export default FilterBox
