import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage } from './homepage/Homepage'
import LinkPage from './homepage/LinkPage'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>,
    errorElement: <h1>Sorry there no such page</h1>,
    children: [
      {
        path: "/",
        element: <LinkPage/>,
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
