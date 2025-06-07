import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const RestrictedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)
  return isAuthenticated ? <Navigate to="/" /> : children
}

export default RestrictedRoute