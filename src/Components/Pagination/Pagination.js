import React, { Component } from 'react'
import './Pagination.scss'

export default class Pagination extends Component {
    render() {
        const { onPageBack, onPageForward, actualPage, totalCount } = this.props;

        let disabled;
        if (actualPage === 1) {
            disabled = 'disabled'
        }
        return (
            <div className='pagination__container'>
                <button onClick={onPageBack} disabled={disabled}>
                    Back
                </button>
                <div>
                    On page {actualPage} of {Math.ceil(totalCount/12)}
                </div>
                <button onClick={onPageForward}>
                    Forward
                </button>
            </div>
        )
    }
}
