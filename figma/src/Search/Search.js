import React from 'react'
import './Search.css'
function Search() {
  return (
    <div>
        <input type='search' className='search' placeholder='Search query...'/>
        <button className='button'>Search</button>
    </div>
  )
}

export default Search