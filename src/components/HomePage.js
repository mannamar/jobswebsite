import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
        <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
            <h1>Cool Places To Work</h1>
        </Container>

        <Container fluid className='btn-cont'>

            <Row>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="Plex">Plex</Button>
                </Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="Dropbox">Dropbox</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="Ebbo">Ebbo</Button>
                </Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="Parsec">Parsec</Button>
                </Col>
            </Row>

            <Row>
                <Col xs={3}></Col>
                <Col xs={6}>
                <Button className="btn btn-dark btn-main" as={Link} to="Backbone">Backbone</Button>
                </Col>
                <Col xs={3}></Col>
            </Row>

        </Container>
        </>
    );
}