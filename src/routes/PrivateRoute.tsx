import {useContext}from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../context/index'


const PrivateRoute = () => {
    const {isAuthenticated} = useContext(AppContext);
  return (
    isAuthenticated ? <Outlet context={isAuthenticated} /> : <Navigate to = "/" />  )
}

export default PrivateRoute