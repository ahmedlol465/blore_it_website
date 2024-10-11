import './App.css'
import About from './pages/About'
import { Contact } from './pages/Contact'
import { Footer } from './pages/Footer'
import { Nav } from './pages/Nav'
import { Serviece } from './pages/Serviece'
import { HomePage } from './pages/home'
import { 
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  Router,
} from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Nav />
            <HomePage />
            <Footer/>
            </>
            } />
          <Route path="/services" element={
            <>
            <Nav />
            <Serviece />
            <Footer/>
            </>
            } />
          <Route path="/contacts" element={
            <>
            <Nav />
            <Contact />
            <Footer/>
            </>
          } />

          <Route path="/about" element={
            <>
            <Nav />
            <About />
            <Footer/>
            </>
          } />
        
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
