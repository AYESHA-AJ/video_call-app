import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import VideoCall from './components/VideoCall.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={ <App />}>
      

    </Route>
      <Route path='/call' element={<VideoCall />} />
      </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router} />
  </React.StrictMode>,
)
