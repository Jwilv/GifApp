import React from 'react'
import { shallow } from 'enzyme'
import { GifExperApp } from '../../GifExperApp';

describe('pruebas en <GifExpertApp />', () => {

    let wrapper = shallow(<GifExperApp />);

    beforeEach( () => {
        wrapper = shallow(<GifExperApp />);
    })

    test('debe renderizarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
        
    });

    test('deben mostrarse correctamente las categorias', () => {
        const categories = ['batman','hunter x hunter']
        wrapper = shallow(<GifExperApp defaultCategorie={ categories }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    });
});