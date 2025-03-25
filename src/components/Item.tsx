import React from 'react'

const Item = ({sumando1, sumando2}) => {

  return (

			<div className="addition-container">
      <div className="inner-container">
				<div className="row">
					<div className="number top-number">{sumando1}</div>
				</div>
				<div className="row sum-row">
					<div className="operator">+</div>
					<div className="number bottom-number">{sumando2}</div>
				</div>
        <div className="border border-dashed rounded-md h-15 mt-3"></div>
        </div>
			</div>

  )
}

export default Item;
