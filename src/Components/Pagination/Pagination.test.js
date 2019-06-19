import React from 'react';
import Pagination from './Pagination';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Pagination HTML renders correctly', () => {
    it('Pagionation check with correct props', () => {
        const output = shallow(
            <Pagination actualPage={1} totalCount={879} changingPage={() => {}}/>
        )
        expect(shallowToJson(output)).toMatchSnapshot()
    })

    it('Pagination goes on next page', () => {
        const spy = jest.fn();
        const output = mount(
            <Pagination actualPage={1} totalCount={879} changingPage={spy}/>
        )
        output.find('[name="buttonNext"]').simulate('click');
        expect(spy.mock.calls[0][0]).toBe('next')
        expect(spy.mock.calls.length).toBe(1)
    })

    it('Pagination goes on previous page', () => {
        const spy = jest.fn();
        const output = mount(
            <Pagination actualPage={2} totalCount={879} changingPage={spy}/>
        )
        output.find('[name="buttonPrev"]').simulate('click');
        expect(spy.mock.calls[0][0]).toBe('prev')
        expect(spy.mock.calls.length).toBe(1)
    })
})