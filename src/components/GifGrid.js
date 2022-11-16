import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className='animate__animated animate__backInLeft'>{category}</h2>
      <div className='card-grid'>
        {loading && <p>loading...</p>}
        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
GifGrid.propTypes ={
  category : PropTypes.string.isRequired,
}
