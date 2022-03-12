import React from 'react'
import '../css/subPageBannes.css'

const SubPageBanner = ({ title }) => {
  return (
    <div className='pageBanner-con'>
      <div className='pageBanner-title'>
        <h1 className='formatted-title'>{title}</h1>
      </div>
      <svg
        id='wave'
        style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
        viewBox='0 0 1440 280'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
            <stop
              stopColor={`${
                title === 'Cosmic Objects'
                  ? 'rgba(0, 0, 0, 1)'
                  : 'var(--main-color)'
              }`}
              offset='0%'
            ></stop>
            <stop
              stopColor={`${
                title === 'Cosmic Objects'
                  ? 'rgba(0, 0, 0, 1)'
                  : 'var(--main-color)'
              }`}
              offset='100%'
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 0px)', opacity: 1 }}
          fill='url(#sw-gradient-0)'
          d='M0,168L1440,0L2880,224L4320,224L5760,28L7200,28L8640,224L10080,28L11520,168L12960,0L14400,168L15840,112L17280,84L18720,84L20160,56L21600,140L23040,196L24480,28L25920,196L27360,56L28800,0L30240,252L31680,224L33120,140L34560,252L34560,280L33120,280L31680,280L30240,280L28800,280L27360,280L25920,280L24480,280L23040,280L21600,280L20160,280L18720,280L17280,280L15840,280L14400,280L12960,280L11520,280L10080,280L8640,280L7200,280L5760,280L4320,280L2880,280L1440,280L0,280Z'
        ></path>
      </svg>
    </div>
  )
}

export default SubPageBanner
