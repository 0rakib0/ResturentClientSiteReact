import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routs/Routs.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Provider from './Provider/Provider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HelmetProvider>
          <div className='w-11/12 mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
