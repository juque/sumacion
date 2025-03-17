import React from 'react'

const Item = ({id, name}) => {
  return (
    <div>
        <strong>ID:</strong> {id} <strong>name:</strong> { name }
    </div>
  )
}

export default Item;
