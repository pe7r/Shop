import React from 'react'
import './SearchInput.scss'

const SearchInput = ({ theme="" }) => {
    return (
        <input className={`search__input ${theme}`} placeholder="Search" />
    )
}

export default SearchInput