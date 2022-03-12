import React from 'react'
import './style.css'
import { ContextConsumer } from '../ContextApi'

const CustomCursor = () => {
  const cursorRef = React.useRef(null)
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  })
  const secondaryCursor = React.useRef(null)
  const { type } = ContextConsumer()
  const [isMob, setIsMob] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e
      const mouseX = clientX
      const mouseY = clientY

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2

      //main cursor
      cursorRef.current.style.transform = `translate3d(${
        mouseX - cursorRef.current.clientWidth / 2
      }px,${mouseY - cursorRef.current.clientHeight / 2}px,0) rotate(${
        type === 'scroll' ? '-90deg' : '60deg'
      }) scale(${type === 'scroll' ? 1.2 : 1})`
    })
  }, [type])

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${
        positionRef.current.destinationX + 60
      }px,${positionRef.current.destinationY + 60}px,0)`
    }

    followMouse()
  }, [])

  const handleCursor = () => {
    if (window.innerWidth <= 667) {
      setIsMob(true)
    }
    if (window.innerWidth > 667) {
      setIsMob(false)
    }
  }

  React.useEffect(() => {
    if (window.innerWidth <= 667) {
      setIsMob(true)
    }
    window.addEventListener('resize', handleCursor)
    return () => window.removeEventListener('resize', handleCursor)
  }, [])

  return (
    <div className={`${type}`}>
      {!isMob ? <div className='main-cursor' ref={cursorRef}></div> : null}

      <div className='secondary-cursor' ref={secondaryCursor}>
        <img src='/images/sec_cursor.png' alt='cursor' />
      </div>
    </div>
  )
}

export default CustomCursor
