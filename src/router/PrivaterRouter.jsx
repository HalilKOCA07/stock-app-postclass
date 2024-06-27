import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivaterRouter = () => {

  const {user} = useSelector((state) => state.auth)

  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivaterRouter
