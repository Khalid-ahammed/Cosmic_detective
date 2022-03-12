import React from 'react'
import { useParams } from 'react-router-dom'
import SubPageBanner from '../components/SubPageBanner'

const ObjDetail = () => {
  const { id } = useParams()
  return (
    <div className='objDetail'>
      <SubPageBanner title={`${id}`} />
      <div
        className='details-msg'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '100px',
        }}
      >
        <h3>This Page will be updated soon...</h3>
      </div>
    </div>
  )
}

export default ObjDetail
