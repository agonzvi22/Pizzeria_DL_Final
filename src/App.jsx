// import Cart from './components/Cart'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Navbar from './components/NavbarMain'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pizza from './pages/Pizza'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'
import RestrictedRoute from './components/RestrictedRoute'

const App = () => {
  return (
    <>
       <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/cart" element={<Cart />} />
              {/* Rutas restringidas: si el usuario está autenticado, redirige a Home */}
              <Route
                path="/login"
                element={
                  <RestrictedRoute>
                    <Login />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute>
                    <Register />
                  </RestrictedRoute>
                }
              />
              {/* Ruta protegida: solo accesible si el usuario está autenticado */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </>
  );
};

export default App;
