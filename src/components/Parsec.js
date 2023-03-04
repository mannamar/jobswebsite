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
                        <img src='https://uploads-ssl.webflow.com/610fa4009677867f18e4b375/61fc3a33a32d0acc886ae1a1_backbone-icon.png' alt='Ebbo logo' width='175'/>
                        <br/>
                        <a href="https://jobs.lever.co/backbone">Careers Page</a>
                    </Col>
                    <Col xs={9}>
                        <p>Parsec is a cloud gaming perhiperal company that specializes in gaming controller accessories for mobile phones. It's rather small at the momement but in a position to grow rapidly as cloud gamin starts to become more and more viable. My goal would be to get in on the bottom floor to a tech sector that I think would be greatly in demand in the future.</p>
                        <p>Their seems to a diverse number or software developer positions at Backbone. They have mobile developer jobs fro both ANdroid and iOS as well as back-end positions. Oddly enough the back-end position seems like one that I'd be most suited for out of Codestack. They're looking for someone with a strong proficiency in Javascript, Typescript, and Node.js who has an understanding of asynchronous programming. Those are all concepts we'll be introduced to at the very least while at Codestack.</p>
                        <p>The positions are remote friendly but benefits don't seem to be outlined as concretely as I've seen with other companies. That may be a bit of a red flag. Also I've only seen listings for senior level engineers but I feel it'd be worthwhile to reach out and ask them about and junior level positions or internships they may be offering.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}