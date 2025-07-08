import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import Home from '../screen/Home'

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoute
