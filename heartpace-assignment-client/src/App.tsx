import React from 'react'

import { RouterProvider } from 'react-router-dom'
import router from '@Utils/router'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

import './App.css'

function App() {
    return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
}

export default App
