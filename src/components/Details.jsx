import React from 'react'
import { ContextConsumer } from '../ContextApi'
import '../css/details.css'

const Details = () => {
  const detailsSec = React.useRef(null)
  const { setDetailsSecPos } = ContextConsumer()

  const handleOffset = () => {
    const offset = detailsSec.current.offsetTop
    console.log(offset)
    setDetailsSecPos(offset)
  }

  React.useEffect(() => {
    handleOffset()
    window.addEventListener('resize', handleOffset)
    return () => window.removeEventListener('resize', handleOffset)
  }, [])
  return (
    <section ref={detailsSec} className='details' id='details'>
      <div className='details-uni'>
        <div className='uni-pic-title'>
          <div className='uni-title'>
            <h3 className='formatted-title'>
              The <br /> Universe
            </h3>
          </div>
          <img src='/images/ex_un.webp' alt='universe image' />
        </div>
        <div className='uni-desc'>
          <h3 className='uni-desc-head'>The Expanding Universe</h3>
          <div className='uni-desc-body'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              cumque esse architecto earum. Repellendus hic vitae cum ipsam
              asperiores exercitationem tempore quia ab! Autem vero sed nemo,
              similique illo voluptas?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
