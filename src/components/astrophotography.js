import React, { useEffect, useState } from 'react';
import { Carousel,
         Container,
         Row
} from 'react-bootstrap';

function Astrophotography() {
    const [albums, setData] = useState([]);

    const fetchData = () => {
        fetch('https://kccoers.github.io/www-data/data.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data[0].astrophotography);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <Container style={{marginTop:"1rem"}}>
        {albums.length > 0 && (
            albums.map(album => (
                <Row>
                    <h3 style={{textTransform:"capitalize"}}>Album: {album.albumName}</h3>
                    <Carousel
                        data-bs-theme="dark"
                        style={{background:"rgba(175, 175, 175, 0.5)",borderRadius:".5rem"}}
                    >
                    {album.photos.map(photo => (
                        <Carousel.Item style={{textAlign:"center"}}>
                            <a href={photo.photoUrl} target="_blank" rel="noreferrer">
                                <img
                                    src={photo.photoUrl}
                                    style={{margin:"6rem 0",height:"20rem"}}
                                    alt={photo.photoUrl} />
                            </a>
                        </Carousel.Item>
                    ))}
                    </Carousel>
                </Row>
            ))
        )}
        </Container>
    )
    
}

export default Astrophotography;
