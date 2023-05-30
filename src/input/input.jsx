import React from 'react'
import './input.scss';

function Input() {
  return (
    <>
      <div className='whole'>
        <input placeholder='Search' type="text" className='whole__search'  />
        <img src="./image/search.png" className='whole__search-icon' />
      </div>
    </>
  )
}

export default Input
