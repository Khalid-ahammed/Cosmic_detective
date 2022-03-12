import React from 'react'
import '../css/objects.css'
import { ContextConsumer } from '../ContextApi'
import SingleObject from './SingleObject'
import { Link } from 'react-router-dom'

const Objects = () => {
  const { data } = ContextConsumer()
  const SplittedData = data.slice(0, 3)
  return (
    <section className='objects' id='objects'>
      <div className='objects-container'>
        {SplittedData.map((singleObj, value) => {
          return <SingleObject {...{ ...singleObj, value }} key={value} />
        })}
        <p style={{ textAlign: 'center' }}>
          <Link to='/objects' className='see-more-obj'>
            see more {`>`}
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Objects
