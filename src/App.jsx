import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pases/Home'
import Footer from './components/Footer'
import Tours from './pases/Tours'
import Gallery from './pases/Gallery'
import About from './pases/About'
import Contact from './pases/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import Booking from './components/Booking'


const router = createBrowserRouter([
  {
    path:'/',
    element: <><Navbar/><Home/><Footer/></>
  },
  {
    path:'/tours',
    element: <><Navbar/><Tours/><Footer/></>
  },
  {
    path:'/gallery',
    element: <><Navbar/><Gallery/><Footer/></>
  },
  {
    path:'/about',
    element: <><Navbar/><About/><Footer/></>
  },
  {
    path:'/contact',
    element: <><Navbar/><Contact/><Footer/></>
  },
  {
    path:'/book',
    element: <><Navbar/><Booking/><Footer/></>
  },
])



function App() {
  return (
    <>
    <RouterProvider router={router}/>
    <ScrollToTop color='white' smooth style={{backgroundColor:'#EF4444', display:'flex', alignItems:'center', justifyContent:'center'}}/>
  </>
  )
}

export default App