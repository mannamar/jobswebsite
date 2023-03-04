import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Dropbox() {
    return (
        <>
            <Container fluid className='hero-cont d-flex align-items-center justify-content-center'>
                <h1>Ebbo</h1>
            </Container>

            <Container fluid className="pages-cont">
                <Row className="gx-35">
                    <Col xs={3}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M2U7rX7tJbmZzYymW5Gzag2tY1sQffpg36QEh3VdJWrotJivf46hASbrFgpAk4ohaw&usqp=CAU' alt='Ebbo logo' width='200'/>
                        <br/>
                        <a href="https://www.ebbo.com/company/careers">Careers Page</a>
                    </Col>
                    <Col xs={9}>
                        <p>Ebbo is a tech marketing company that specializes in customer engagement via loyalty solutions. I think this would be pretty cool because as it turns out they developed a few of the one I use all the time. Specifically they worked on the T-Mobile Tuesday app which was an awesome idea and I've seen it get better and better since release.</p>
                        <p>One of my goals with this position would be to make some connections in the idustry. Ebbo itself is constantly working with other companies to develop their loyalty programs. I've read a few testimonials where employees at Ebbo were able to leverage the connections they made on the job to find new oppurtunities in their careers.</p>
                        <p>The company is based in CT but offers 100% remote work as well as relocation benefits if you're interested in an in-person gig. Work environment seems super chill. They offer unlimited PTO and every Friday is a half-day. The rest of the benefits seem pretty good and employee testimonials have mentioned a very generous 401k match. It's also one of the highest rated companies I saw on Indeed.com so the employees generally seem to be very happy working there.</p>
                        <p>They work with C#, .Net, Javascript, Bootstrap, and React which I'm pretty familiar with. They seem to have a broad tech stack beyond that with things like JQuery, Hulp/Grunt, and ASP.NET which I'm unfamiliar with but it doesn't seem like they expect you to know all technologies very thoroughly as long as you are willing to learn them</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}