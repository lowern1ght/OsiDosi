import React from 'react'

import './index.css'
import {router} from "./BrowserRouter"
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)