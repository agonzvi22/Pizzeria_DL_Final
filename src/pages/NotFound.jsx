import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <img
            src="https://cdn.vectorstock.com/i/1000v/33/74/error-404-page-not-found-design-template-vector-21273374.avif"
            alt="404"
            width="200"
          />
          <h1 className="display-1">404</h1>
          <p>Página no encontrada</p>
          <Link to="/" className="btn btn-success m-3">
            Volver a Home
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound