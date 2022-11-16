import React from 'react'
import { shallow } from 'enzyme'
import { GifExperApp } from '../../GifExperApp';

describe('pruebas en <GifExpertApp />', () => {
    const wrapper = shallow(<GifExperApp />)
    test('debe renderizarse correctamente', () => {
        
    expect(wrapper).toMatchSnapshot();
        
    });
});