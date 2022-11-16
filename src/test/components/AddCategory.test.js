import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('test de <AddCategory />', () => {

    const setCategories = jest.fn()
    const value = 'hola mundo'

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe mostrarase correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const inptu = wrapper.find('input')
        inptu.simulate('change', { target: { value } })
        const output = wrapper.find('p').text();
        expect(value).toBe(output);
    });

    test('NO debe poster la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe llamar a setCatgories y limpiar la caja de texto', () => {
        wrapper.find('input').simulate('change',{target:{value}})
        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('')
    });
});