import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('pruebas en <GifGridItem />', () => {
    test('debe mostrar el commponente correctamente', () => {
        const wraper = shallow(<GifGridItem />)

        expect(wraper).toMatchSnapshot()

    })

})