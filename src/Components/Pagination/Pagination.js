import React, { Component } from 'react'
import './Pagination.scss'
import { leftArrow, rightArrow } from '../Icons/Icons'

export default class Pagination extends Component {
    render() {
        const { onPageBack, onPageForward, actualPage, totalCount } = this.props;

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
            
            <div className='pagination__container button-right'>
                <button onClick={onPageBack}
                        disabled={disabledBack}
                        className="pagination__button">
                    {leftArrow}
                </button>
                <div className="pagination__info">
                    On page {actualPage} of {pageCount}
                </div>
                <button onClick={onPageForward}
                        disabled={disabledForward}
                        className="pagination__button button-right">
                    {rightArrow}
                </button>
            </div>
        )
    }
}
