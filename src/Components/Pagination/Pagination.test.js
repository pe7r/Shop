import React from 'react';
import Pagination from './Pagination'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Pagination HTML renders correctly', () => {
    it('theme is an empty string', () => {
        const output = shallow(
            <Pagination actualPage={1} totalCount={879} changingPage={() => {}}/>
        )
        expect(shallowToJson(output)).toMatchSnapshot()
    })
})