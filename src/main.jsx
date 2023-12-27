import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import PesquisarMorador from './pages/PesquisarMorador/PesquisarMorador'
import Login from './pages/Login/Login'
import PerfilMorador from './pages/PerfilMorador/PerfilMorador'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/moradores",
        element: <PesquisarMorador />
      },
      {
        path: "/perfil",
        element: <PerfilMorador />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
