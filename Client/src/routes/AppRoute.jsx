import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../screen/Login'

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home page</div>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<div>Signup page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoute
