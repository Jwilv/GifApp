import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';

describe('pruebas en <GifGrid />', () => {
    
    test('debe de mostrarse correctamente', () => {
        const category = 'batman'
        const wraper =shallow(<GifGrid category={category}/>)
        expect(wraper).toMatchSnapshot()
    });
});