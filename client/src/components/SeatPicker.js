import React from 'react'

const SeatPicker = ({location}) => {

  const time=location.search.split('=')[1]

  return (
    <div>
      <h1>Choose seats</h1>
    </div>
  )
}

export default SeatPicker
