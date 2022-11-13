import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('pruebas en <GifGridItem />', () => {
    test('debe mostrar el commponente correctamente', () => {

        const title = 'soy un titulo'
        const url ='htpps://localhost/test'

        const wraper = shallow(<GifGridItem title={title} url={url} />)

        expect(wraper).toMatchSnapshot()

    })

})