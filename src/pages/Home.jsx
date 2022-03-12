import React from 'react'
import '../css/home.css'
import { ContextConsumer } from '../ContextApi'
import Details from '../components/Details'
import Objects from '../components/Objects'

const Home = () => {
  const { setType, detailsSecPos } = ContextConsumer()
  return (
    <>
      <section className='home' id='home'>
        <div className='left'></div>
        <div className='right'>
          <div className='title-sec'>
            <div className='main-title-container'>
              <div className='main-title'>
                <div className='title-stroke'> COSMIC </div>

                <div className='title-solid'>DETECTIVE</div>
              </div>
            </div>
          </div>
          <div className='sub-title'>
            <h3>Explore the mystery of the cosmos</h3>
            {/* <p className='sub-para'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              libero ratione odio iure culpa. Omnis?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Inventore praesentium
            </p> */}
          </div>
        </div>
        <div className='scroll-down'>
          <img
            src='/images/scroll-roc.png'
            alt='scroll-img'
            onMouseEnter={() => setType('scroll')}
            onMouseLeave={() => setType('default')}
            onClick={() => {
              window.scrollTo({
                left: 0,
                top: detailsSecPos,
              })
            }}
          />
        </div>
      </section>
      <Details />
      <Objects />
    </>
  )
}

export default Home
