import React, { useEffect, useState } from 'react';
import { Carousel,
         Container,
         Row
} from 'react-bootstrap';

function Astrophotography() {
    const [albums, setAlbums] = useState([]);

    const fetchAlbumData = () => {
        fetch('https://kccoers.github.io/astrophotography/data.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setAlbums(data);
            });
    }

    useEffect(() => {
        fetchAlbumData()
    }, [])

    return(
        <Container style={{marginTop:"1rem"}}>
        {albums.length > 0 && (
            albums.map(album => (
                <Row>
                    <h3 style={{textTransform:"capitalize"}}>Album: {album.albumName}</h3>
                    <Carousel data-bs-theme="dark" style={{background:"rgba(175, 175, 175, 0.5)",borderRadius:".5rem"}}>
                    {album.photos.map(photo => (
                        <Carousel.Item style={{textAlign:"center"}}>
                            <a href={photo.photoUrl} target='_blank'>
                                <img src={photo.photoUrl} style={{margin:"6rem 0",height:"20rem"}} />
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
