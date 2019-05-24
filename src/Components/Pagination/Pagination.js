import React, { Component } from 'react'
import './Pagination.scss'

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
            <div className='pagination__container'>
                <button onClick={onPageBack} disabled={disabledBack}>
                    Back
                </button>
                <div>
                    On page {actualPage} of {pageCount}
                </div>
                <button onClick={onPageForward} disabled={disabledForward}>
                    Forward
                </button>
            </div>
        )
    }
}
