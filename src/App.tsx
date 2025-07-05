
import { Outlet } from 'react-router'
import { Navbar } from './components/module/Navbar'
import Footer from './components/module/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
