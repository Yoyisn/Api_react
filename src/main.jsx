import './index.css';
import React from 'react';
import { About } from './routes/about';

import ReactDOM from 'react-dom/client';
import { Welcome } from './routes/home';
import { Perfiles } from './routes/Perfil';

import { Error } from './components/error';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error />
  },
  {
    path: '/perfil',
    element: <Perfiles />,
    errorElement: <Error />
  }
]); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
)