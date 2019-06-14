import React, { Component } from 'react'
import './Sort.scss'
import { sortArrowDown, sortArrowDownActive } from '../Icons/Icons'

export default class Sort extends Component {
    state = {
        isOpened: false,
        allSorts: [
            { 
                name:'Best Seller',
                id: 'bestseller'
            }, 
            { 
                name:'New Arrival',
                id: 'new_arrival'
            }, 
            { 
                name:'On Sale',
                id: 'discount'
            }, 
            { 
                name:'Price: Low - High',
                id: 'pricelowtohigh'
            }, 
            { 
                name:'Price: High - Low',
                id: 'pricehightolow'
            }
        ]
    }  

    handleSortClick = () => {
        this.setState(prevState => {
            return {isOpened: !prevState.isOpened}
        })
    }

    chooseSort = (sortName, sortId) => {
        const { onSortProducts } = this.props;
        this.handleSortClick()
        onSortProducts(sortId, sortName)
    }

    render() {
        const { isOpened, allSorts } = this.state;
        const {actualSort} = this.props;

        let sortShowActive = "";
        if (isOpened) {
            sortShowActive = "sort__active"
        }

        let sortIsChosenStyle = "";
        if (actualSort !== 'Sort') {
            sortIsChosenStyle = "sort__button--chosen"
        }

        const sortsList = allSorts.map(sort => {
            return (
                <div key={sort.name} 
                     className="sort__item"
                     onClick={() => this.chooseSort(sort.name, sort.id)}>
                    {sort.name}
                </div>
            )
        })
        return (
            <div className="sort__container">
                <button className={`sort__button ${sortIsChosenStyle}`} onClick={this.handleSortClick}>
                    <div>{actualSort}</div>
                    { actualSort === 'Sort' ? sortArrowDown : sortArrowDownActive }
                </button>
                <div className={`sort__hidden ${sortShowActive}`}>
                    <div className="sort__list">
                        {sortsList}
                    </div>
                    <div className="sort__mobile-background" onClick={this.handleSortClick}></div>
                </div>
            </div>
        )
    }
}
