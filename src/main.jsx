import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routs/Routs.jsx'
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
