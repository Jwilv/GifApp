import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('pruebas en <GifGridItem />', () => {

    const title = 'soy un titulo'
    const url = 'htpps://localhost/test'
    const wraper = shallow(<GifGridItem title={title} url={url} />)

    test('debe mostrar el commponente correctamente', () => {
        expect(wraper).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wraper.find('p')
        expect(p.text().trim()).toBe(title)
    });
    test('la img debe tener el url y el title de los props', () => {
        const img = wraper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    });

    test('el div debe tener la className asignada', () => {
        const estilo = wraper.find('div');
        const className = estilo.prop('className')
        expect(className.includes('card animate__animated animate__backInLeft')).toBe(true)
    });

}) 