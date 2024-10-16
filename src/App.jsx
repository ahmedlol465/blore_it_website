import './App.css'
import ContactForm from './conponents/SendEmailForm'
import About from './pages/About'
import { CallYou } from './pages/CallYou'
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
            <ContactForm/>
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


          <Route path="/Call" element={
            <>
            <Nav />
            <CallYou />
            <Footer/>
            </>
          } />
        
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
