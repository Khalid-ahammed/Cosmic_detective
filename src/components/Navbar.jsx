import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import { menuItems } from '../data/pageSet'
import { ContextConsumer } from '../ContextApi'

const Navbar = () => {
  const [navSticky, setNavSticky] = React.useState(false)
  // const {detailsSecPos}=ContextConsumer();

  console.log(navSticky)
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset
    if (pageYOffset > 100) {
      console.log(`yes`)
      setNavSticky(true)
    }
    if (pageYOffset <= 100) {
      setNavSticky(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 800) {
        // setColor('fsd')
      }
    })
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener(handleScroll)
  }, [])

  // console.log(color)
  return (
    <nav className={`navbar${navSticky ? ' sticky' : ''}`}>
      <div className='nav-container'>
        <div className='logo-container'>
          <h4 className='logo'>
            Cosmic <span className='logo-ext'>D</span>etective
          </h4>
        </div>

        <div className='menu'>
          {menuItems.map((menuItem, value) => {
            return (
              <Link key={value} to={menuItem.ref} className='menu-item'>
                {menuItem.title}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
