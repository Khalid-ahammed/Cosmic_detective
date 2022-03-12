import React from 'react'
import SubPageBanner from '../components/SubPageBanner'
import { Link } from 'react-router-dom'
import '../css/error.css'

const NotFound = () => {
  return (
    <div className='error-Container'>
      <SubPageBanner title={'Oops!!'} />
      <div className='error-body'>
        <img src='/images/error.png' alt='' />
        <div className='error-msg'>
          <p>Looks like we have lost!!</p>

          <Link to='/'>
            <h3>Home {'>'}</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
