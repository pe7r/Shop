import React, { Component } from 'react'
import './Pagination.scss'
import { leftArrow, rightArrow } from '../Icons/Icons'

export default class Pagination extends Component {
    render() {
        const { actualPage, totalCount, changingPage } = this.props;

        const pageCount = Math.ceil(totalCount/12);

        let disabledBack;
        if (actualPage === 1) {
            disabledBack = 'disabled'
        } 

        let disabledForward;
        if (actualPage === pageCount) {
            disabledForward = 'disabled'
        }
        return (
            
            <div className='pagination__container'>
                <button onClick={() => changingPage('prev')}
                        disabled={disabledBack}
                        name="buttonPrev"
                        className="pagination__button button-left">
                    {leftArrow}
                </button>
                <div className="pagination__info">
                    PAGE {actualPage} OF {pageCount}
                </div>
                <button onClick={() => changingPage('next')}
                        name="buttonNext"
                        disabled={disabledForward}
                        className="pagination__button button-right">
                    {rightArrow}
                </button>
            </div>
        )
    }
}
