import React from 'react'
import { Link } from 'react-router-dom'

const SingleObject = ({ title, image, desc, types, value, name }) => {
  return (
    <article
      className='single-obj'
      style={{
        flexDirection: value % 2 === 0 ? 'row-reverse' : 'row',
      }}
    >
      <div className='obj-img-container'>
        <img src={image} alt='Obj-img' loading='lazy' />
      </div>
      <div className='objBody'>
        <div
          className='obj-title'
          style={value % 2 === 0 ? { right: '-20%' } : { left: '-20%' }}
        >
          <h2 className='formatted-title'>{title}</h2>
        </div>
        <div className='obj-desc'>{desc}</div>
        <Link to={`/objDetail/${name}`} className='more-button'>
          <span>learn</span> more
        </Link>
      </div>
    </article>
  )
}

export default SingleObject
