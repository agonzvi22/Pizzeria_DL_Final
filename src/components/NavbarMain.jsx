import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const NavbarMain = () => {
  const { isAuthenticated, login, logout } = useContext(UserContext)
  const { formattedTotal } = useContext(CartContext)

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mía!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-decoration-none ms-3 ${
                  isActive ? 'active' : 'text-white'
                }`
              }
            >
              Home
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `text-decoration-none ms-3 ${
                      isActive ? 'active' : 'text-white'
                    }`
                  }
                >
                  Profile
                </NavLink>
                <a
                  className="text-decoration-none ms-3 text-white"
                  onClick={logout}
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `text-decoration-none ms-3 ${
                      isActive ? 'active' : 'text-white'
                    }`
                  }
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `text-decoration-none ms-3 ${
                      isActive ? 'active' : 'text-white'
                    }`
                  }
                >
                  Login
                </NavLink>
              </>
            )}

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-decoration-none ms-3 ${
                  isActive ? 'active' : 'text-white'
                }`
              }
            >
              Cart
            </NavLink>
          </Nav>

          <div className="d-flex border border-primary-subtle">
            <p className="text-white justify-content-center p-2">
              <Link to="/cart" className="text-decoration-none text-white">
                Total: 🛒 ${formattedTotal}
              </Link>
            </p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarMain