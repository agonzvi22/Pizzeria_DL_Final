import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
const Profile = () => {
  const { user, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout() // Llamar a la función para cerrar sesión
    navigate('/') // Redirigir a la página principal
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Card border="danger" className="text-center m-3">
          <Card.Header>Perfil</Card.Header>
          <Card.Img
            variant="top"
            src="https://cdn.vectorstock.com/i/1000v/22/50/developer-line-icon-outline-vector-30762250.avif"
            alt="Imagen de Perfil"
          />
          <Card.Body>
            <Card.Title>Perfil</Card.Title>
            <Card.Text>
              <p>Nombre: {user?.name || 'Usuario'}</p>
              <p>Email: {user?.email || 'No disponible'}</p>
            </Card.Text>
            <Button variant="danger" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default Profile