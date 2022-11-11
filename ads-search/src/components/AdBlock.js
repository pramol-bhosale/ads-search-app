import React from 'react'

function AdBlock(props) {

  return (
    <>
      <div className='col-11  col-sm-5 col-md-4 text-center m-2 m-lg-0  '>
        <div className=' p-1 border d-inline-block mt-1 mb-1'>
          <div>
            <img src={props.element.imageUrl} className="ads-img" alt="" />
          </div>
          <div>
            <span className='m-2 d-block headline'>{props.element.headline}</span>
            <button className='btn btn-primary m-1'> {props.element.CTA}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdBlock