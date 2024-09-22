import * as React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import certifications from '../data/certs.json'

function Certs() {
    const certs = certifications.certs;

    return(
        <Container>
            <h2>Networking Certifications</h2>
            <div className='d-flex flex-column flex-lg-row'>
            {certs.networking.map((cert) => {
                const image = require (`../images/${cert.imageFile}`)

                return(
                    <Card style={{flexDirection:"row",marginRight:"1rem",marginBottom:"1rem"}}>
                        <Card.Img variant='top' src={image} style={{display:'block',margin:'1rem',width:'4rem'}} />
                        <Card.Body>
                            <Card.Title>{cert.name} ({cert.abbr})</Card.Title>
                            { cert.hyperlink.length > 0 && <Button style={{margin:"0 auto"}} variant='outline-light' href={cert.hyperlink} target="_blank">DIGITAL CERTIFICATE</Button> }
                            { cert.hyperlink.length === 0 && <Card.Text>{cert.certNumber}</Card.Text> }
                        </Card.Body>
                    </Card>
                )

            })}
            </div>
            <hr />
            <h2>Cloud Certifications</h2>
            <div className='d-flex flex-column flex-lg-row'>
            {certs.cloud.map((cert) => {
                const image = require (`../images/${cert.imageFile}`)

                return(
                    <Card style={{flexDirection:"row",marginRight:"1rem",marginBottom:"1rem"}}>
                        <Card.Img variant='top' src={image} style={{display:'block',margin:'1rem',width:'4rem'}} />
                        <Card.Body>
                            <Card.Title>{cert.name} ({cert.abbr})</Card.Title>
                            { cert.hyperlink.length > 0 && <Button variant='outline-light' href={cert.hyperlink} target="_blank">DIGITAL CERTIFICATE</Button> }
                            { cert.hyperlink.length === 0 && <Card.Text>{cert.certNumber}</Card.Text> }
                        </Card.Body>
                    </Card>
                )

            })}
            </div>
        </Container>
    )

}

export default Certs;
