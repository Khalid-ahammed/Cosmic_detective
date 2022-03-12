import React from 'react'
import '../css/footer.css'
import { menuItems } from '../data/pageSet'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='contact'>
        <div className='contact-head'>
          <h2 className='formatted-title'>Get In Touch</h2>

          <div className='newsLetter'>
            <h4>Subscribe for our weekly newsletter!!</h4>
            <img src='/images/news.jpg' alt='' loading='lazy' />
          </div>
        </div>
        <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
          <input type='text' placeholder='your name' />
          <input type='email' placeholder='email' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
      <div className='main-footer'>
        <div className='footer-logo'>
          <h4 className='logo'>
            Cosmic <span className='logo-ext'>D</span>etective
          </h4>
          <p>Explore the mystery of the cosmos</p>
        </div>
        {/* <div className='navigation'>
          {menuItems.map((item) => {
            return <Link to={`${item.ref}`}>{item.title}</Link>
          })}
        </div> */}
        <div className='social-links'>
          <h3>
            <span>Follow</span> us on
          </h3>
          <div className='social-icons'>
            <a target='_blank' href='https://www.facebook.com'>
              <FaFacebookSquare className='s-icon' />
            </a>
            <a target='_blank' href='https://www.youtube.com'>
              <FaYoutube className='s-icon' />
            </a>
            <a target='_blank' href='https://www.instagram.com'>
              <FaInstagramSquare className='s-icon' />
            </a>
          </div>

          <p className='dev-info'>
            Developed with ♥ by{' '}
            <a
              target='_blank'
              href='https://www.facebook.com/khalid.ahammed.39'
            >
              Khalid Ahammed Uzzal
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
