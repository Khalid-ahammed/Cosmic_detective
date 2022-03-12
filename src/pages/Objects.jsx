import React from 'react'
import SingleObject from '../components/SingleObject'
import { ContextConsumer } from '../ContextApi'
import SubPageBanner from '../components/SubPageBanner'

const Objects = () => {
  const { data } = ContextConsumer()
  return (
    <div className='objects-page'>
      <SubPageBanner title={'Cosmic Objects'} />
      <section className='objects'>
        <div className='objects-container'>
          {data.map((singleObj, value) => {
            return <SingleObject {...{ ...singleObj, value }} key={value} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Objects
