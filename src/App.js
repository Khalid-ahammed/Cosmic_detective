import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import CustomCursor from './customCursor/Cursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className='main'>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            {/* <Route path='objects' element={<About />} /> */}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
