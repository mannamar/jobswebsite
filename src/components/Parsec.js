import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Parsec() {
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Parsec</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={3}>
                        <img src='https://i0.wp.com/articles.parsec.app/wp-content/uploads/2019/09/Parsec-Horizontal-Logo-Light-Background.png?ssl=1' alt='Ebbo logo' width='175'/>
                        <br/>
                        <a href="https://parsec.app/careers">Careers Page</a>
                    </Col>
                    <Col xs={9}>
                        <p>Right off the bat: "Parsec is now a part of Unity". Amazing! Who would have thought all those months of grinding Unity during the combine would actually end up being useful work experience. Parsec itself ins't really a gaming company but rather one of the biggest players in the game streaming or cloud-gaming space. They are one of the most widely used for a reason. Their low-latency technology is considered to be the best available at the moment.</p>
                        <p>My goal would be to get my foot in the door into a tech space that I see rapidly growing in the next few years. They employ a lot of front and back end technologies into their application which would also give me plenty of room to grow as a developer. </p>
                        <p>On the front end side they use Javascript and React which we've covered in class. The core of their program is written in C though. Since we learned C# it shouldn't be too hard to get started in the learning process but I imagine it will take a significant learning investment to get adept enough to the point where I can consider applying.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}