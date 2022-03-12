import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import { menuItems } from '../data/pageSet'
import { ContextConsumer } from '../ContextApi'
import { useLocation } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from 'react-icons/fa'

const Navbar = () => {
  const [navSticky, setNavSticky] = useState(false)
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)
  const [navOpen, setNavOpen] = useState(null)
  const mobileMenuContainer = useRef(null)

  // const {detailsSecPos}=ContextConsumer();

  // console.log(navSticky)
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset
    if (pageYOffset > 100) {
      // console.log(`yes`)
      setNavSticky(true)
    }
    if (pageYOffset <= 100) {
      setNavSticky(false)
    }
  }

  const handleNavOpen = () => {
    mobileMenuContainer.current.style.display = 'block'
    mobileMenuContainer.current.classList.add('open')
    document.documentElement.style.overflowY = 'hidden'
  }

  const handleNavClose = () => {
    mobileMenuContainer.current.style.opacity = 0
    mobileMenuContainer.current.classList.remove('open')
    mobileMenuContainer.current.style.display = 'none'
    document.documentElement.style.overflowY = 'auto'
  }

  useEffect(() => {
    if (window.innerWidth < 667) {
      setIsMobile(true)
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 667) {
        setIsMobile(true)
      }
      if (window.innerWidth >= 667) {
        setIsMobile(false)
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener(handleScroll)
  }, [])

  // console.log(color)
  return (
    <>
      <nav className={`navbar${navSticky ? ' sticky' : ''}`}>
        <div className='nav-container'>
          <div className='logo-container'>
            <h4 className='logo'>
              Cosmic <span className='logo-ext'>D</span>etective
            </h4>
          </div>

          {isMobile ? (
            <div
              className='bar'
              onClick={() => {
                setNavOpen(true)
                handleNavOpen()
              }}
            >
              <span className='hamburger'></span>
            </div>
          ) : (
            <div className='menu'>
              {menuItems.map((menuItem, value) => {
                return (
                  <Link
                    key={value}
                    to={menuItem.ref}
                    className={`menu-item${
                      `.${location.pathname}` === menuItem.ref
                        ? ' menu-active'
                        : ''
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </nav>
      {/* mobile menu */}
      <div className='mobileMenuContainer' ref={mobileMenuContainer}>
        <div className='mobile-menu'>
          <h4 className='logo'>
            Cosmic <span className='logo-ext'>D</span>etective
          </h4>
          <MdClose
            className='closeMenu'
            onClick={() => {
              handleNavClose()
              setNavOpen(false)
            }}
          />
          <div className='menuList'>
            {menuItems.map((menuItem, value) => {
              return (
                <Link
                  key={value}
                  to={menuItem.ref}
                  className={`menu-item${
                    `.${location.pathname}` === menuItem.ref
                      ? ' menu-active'
                      : ''
                  }`}
                >
                  {menuItem.title}
                </Link>
              )
            })}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
