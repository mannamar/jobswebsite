import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Plex() {
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Plex</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={3}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Plex_logo_2022.svg/800px-Plex_logo_2022.svg.png?20220502185220' alt='Plex logo' width='200'/>
                        <br/>
                        <a href="https://www.plex.tv/careers/">Careers Page</a>
                    </Col>
                    <Col xs={9}>
                        <p>Plex seems like an awesome place to work. The product itself is something I use daily. It started out as a relatively small application that specialized in running a home media server. Recently it's grown expontnetially and expanded to Live TV, cloud media servers, retro game streaming, launching it's own streaming service, and serving as a content aggregator across all your streaming apps.</p>
                        <p>The work culture seems pretty chill. Across their website and documentation there's a ton of funny movie references so it seems that the employees are genuinely passionate about film as an artform. The jobs themselves are fully remote but they do have a new office in the bay area so I'd at least be able to meet some people at the company if I ever wanted to.</p>
                        <p>The benefits seem pretty great. The $4k hardware stipdend immediately jumps out as I'd love to be able to get myself a top of the line computer and monitor day 1. Work life balance seems important to them and they offer a ton of PTO. 'Flexible Fridays' seems like an awesome idea where they never have scheduled meetings on Friday and they pretty much reserve it as a day to be creative or catch up on work you weren't able to get to during the week.</p>
                        <p>Their frontend stack is very heavy in React and they use a lot of React Native for their various mobile apps. They also seem to rely heavily on React Native for Web to bridge the two worlds. Thye also have a heavy backend stack that uses technologies like Python and SQL. I'd have to learn a lot to get up to speed but feel like I at least have enough familiarity with adjacent technologies where I could quickly get up to speed with the basics before applying.</p>
                        <p>My goal would be to learn how to efficitvely contribute to a production application that already has a large code base but seems to be rapidly expanding with new features.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}