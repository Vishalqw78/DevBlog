
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import ProtectRoutes from './components/ProtectRoutes'

function App() {

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectRoutes><Home/></ProtectRoutes>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
