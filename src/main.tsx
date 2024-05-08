import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homepage } from './homepage/Homepage'
import LinkPage from './homepage/LinkPage'
import { MotivationMainPage} from './pages/useForm-exemple/MotivationMainPage' 
import { CounterMainPage } from './pages/counter/CounterMainPage'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>,
    errorElement: <h1>Sorry there no such page</h1>,
    children: [
      {
        path: "/",
        element: <LinkPage/>,
      },
      {
        path: "/useForm-example",
        element: <MotivationMainPage/>
      },
      {
        path: "/counter",
        element: <CounterMainPage/>
      },
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
