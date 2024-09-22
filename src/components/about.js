import { Accordion,
         Badge,
         Container,
         Stack
} from 'react-bootstrap';

import about from '../data/about.json'
import areasOfExpertise from '../data/areasOfExperise.json'

function About() {
    const areas = areasOfExpertise.areas;

    const jobs = about.jobs;

    return(
        <Container style={{marginTop:"1rem"}}>
            <p style={{fontSize:"1.5rem"}}>{about.professional}</p>
            <hr></hr>
            <Accordion>
            {jobs.map((job, i) => {
                return(
                    <Accordion.Item eventKey={i}>
                        { (job.endDateMonth == "current" || job.endDateYear == "current") &&
                            <Accordion.Header>{job.title}<br></br>{job.company} - {job.startDateMonth} {job.startDateYear} - Current</Accordion.Header>
                        }
                        { (job.endDateMonth != "current" || job.endDateYear != "current") &&
                            <Accordion.Header>{job.title}<br></br>{job.company} - {job.startDateMonth} {job.startDateYear} - {job.endDateMonth} {job.endDateYear}</Accordion.Header>
                        }
                        <Accordion.Body>
                            {job.descriptions.map((description, i) => {
                                return(
                                    <>
                                    <h6>{description.vertical} - {description.subVertical}</h6>
                                    <p>{description.description}</p>
                                    { description.descriptors.length > 0 &&
                                        <ul>
                                        {description.descriptors.map((descriptor) => {
                                            return(
                                                <li style={{fontSize:"1rem"}}>{descriptor}</li>
                                            )
                                        })}
                                        </ul>
                                    }
                                    <hr></hr>
                                    </>
                                )
                            })}
                            {job.skills.map((skill) => {
                                return(
                                    <Badge bg="light" text="dark" style={{marginRight:".5rem",marginBottom:".5rem"}}>{skill}</Badge>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
            </Accordion>
        </Container>
    )

}

export default About;
