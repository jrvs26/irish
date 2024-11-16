import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Irish from "../views/Irish"
import Loved from "../views/Loved"


function WebRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/hello" />} />
        <Route path='/hello' element={<Irish />} />
        <Route path='/message' element={<Loved />} />
    </Routes>
  )
}

export default WebRoutes