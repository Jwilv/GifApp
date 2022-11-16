import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('test de <AddCategory />', () => {

    const setCategories = () => { }
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    test('debe mostrarase correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('debe de cambiar la caja de texto', () => {
        const inptu = wrapper.find('input')
        const value = 'hola mundo'
        inptu.simulate('change', { target: { value } })
        const output = wrapper.find('p').text()
        expect(value).toBe(output)

    });
});