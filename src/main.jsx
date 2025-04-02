import React from 'react'
import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={} />
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
