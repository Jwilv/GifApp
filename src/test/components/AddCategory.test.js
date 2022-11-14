import React from 'react'
import {shallow} from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('test de <AddCategory />', () => {
    
    const setCategories = ()=>{}

    test('debe mostrarase correctamente', () => {
        const wrapper = shallow(<AddCategory setCategories={setCategories} />)

        expect(wrapper).toMatchSnapshot()
    });
});