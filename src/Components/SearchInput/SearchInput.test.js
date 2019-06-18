import React from 'react';
import SearchInput from './SearchInput'
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';



describe('SearchInput', () => {
    describe('props works correctly', () => {
        it('theme is an empty string', () => {
            const output = shallow(
                <SearchInput placeholder="Search" theme=''/>
            )
            expect(shallowToJson(output)).toMatchSnapshot()
        })
    })
})