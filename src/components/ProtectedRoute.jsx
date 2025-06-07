import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute