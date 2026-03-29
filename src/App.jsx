
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <>
      <ScrollToTop />
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>

      </div>

    </>
  )
}

export default App
