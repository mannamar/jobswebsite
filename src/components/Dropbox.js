import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Dropbox() {
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Dropbox</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={3}>
                        <img src='https://logos-world.net/wp-content/uploads/2020/10/Dropbox-Logo-700x394.png' alt='Dropbox logo' width='200'/>
                        <br/>
                        <a href="https://jobs.dropbox.com/teams/emerging-talent">Careers Page</a>
                    </Col>
                    <Col xs={9}>
                        <p>One of the coolest things about Dropbox is they have a 5 month apprenticeship program specifically aimed at coders coming from non-traditional learning backgrounds (i.e. bootcamps) who are trying to break in to the field. That seems like an awesome place to work because they genuinely seem to be interested in your long term success as a web developer rather than an immediate workhorse.</p>
                        <p>The interview process for their apprenticeship program doesn't seem to stress any specific technoclogy, you can answer the questions in the language of your choice and Javascript is one of their suggested options.</p>
                        <p>It's hard to find specifics of what technologies you'll be using during the apprenticeship but they seem to emphasize both frontend and backend skills. When checking out their general job listings it does seem that their frontend positions have less strict requirements while their backend positions generally seem to require a CS degree or a decent amount of equivalent industry experience.</p>
                        <p>Their frontend stack uses a lot of Javascript, React, and HTML/CSS which I should hopefully be pretty adept at. Additionally they also use TypeScript and Angular which I would need to learn on my own. Thankfully Codestack seems to have a decent amount of experience with those new-to-me technologies and I would have some guidance in figuring out the best way to efficitvely learn them</p>
                        <p>Dropbox offers insanely good monetary compensation as well as decent benefits overall. My goal would be to accelerate my learning process during the apprenticeship. The projects would likely be on a much smaller scale than a typical junior dev position but would offer an environment that emphasizes learning.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}