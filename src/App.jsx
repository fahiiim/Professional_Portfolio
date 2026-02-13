
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Navbar/Navbar'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>

      </div>

    </>
  )
}

export default App
