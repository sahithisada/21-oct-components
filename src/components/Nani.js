import React from 'react'

function Nani(props) {
  return (
    <div className='movieDiv'>
    <img src={props.picURL} alt=""></img>
    <h3>Movie Name:{props.MovieName}</h3>
    <h3>Year:{props.Year}</h3>
    <h3>Story line:{props.StoryLine}</h3>
  </div>

  )
}

export default Nani
