import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'

import areasOfExpertise from '../data/areasOfExperise.json'

function About() {
    const areas = areasOfExpertise.areas;

    return(
        <Container>
            <h2 style={{fontWeight: '400'}}>Professional</h2>
            <p style={{fontSize:"1.5rem"}}>Technical Solutions Architect with over 10 years of experience 
               and a strong affinity towards providing solutions and products 
               based on business needs, return on investment, scalability, 
               and technical debt elimination. Proven success in strategically 
               aligning IT Solutions and products with IT and Business Operations.</p>
            <hr />    
            <h2 style={{fontWeight: '400'}}>Areas of Expertise</h2>
            {areas.map((expertise) => {
                return(
                    <Badge bg="light" text="dark" style={{fontSize:"1rem",marginRight:".5rem",marginBottom:".5rem"}}>{expertise.area}</Badge>
                )
            })}
        </Container>
    )

}

export default About;
