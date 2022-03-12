import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import CustomCursor from './customCursor/Cursor'
import Footer from './components/Footer'
import Objects from './pages/Objects'
import ObjDetail from './pages/ObjDetail'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className='main'>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/objects' element={<Objects />} />
            <Route path='/objDetail/:id' element={<ObjDetail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
