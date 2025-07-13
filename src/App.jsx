import { Outlet, useSearchParams } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Header , Footer} from './component'

function App() {

  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){dispatch(login({userData}))
      }else{
    dispatch(logout())}
    })
    .finally(()=>{setloading(false)})
  },[])

  return !loading ? (
<div className='min-h-screen flex flex-wrap content-between
bg-gray-400'>
  <div className='w-full block'>
    <Header/>
    <main>
      Blog{/* <Outlet/> */}
    </main>
    <Footer/>
  </div>
</div>
  ): "null"
}

export default App
