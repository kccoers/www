import React, { useEffect, useState } from 'react';
import { Button,
         Card,
         Carousel,
         Col,
         Container,
         Row,
         Spinner
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

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    /*<div style={{textAlign:"center",margin:"0 auto"}}>
        <p>Background Image Credit:&nbsp;
            <a style={{color: '#FFF'}} href="https://webbtelescope.org/contents/media/images/2023/128/01H449193V5Q4Q6GFBKXAZ3S03?news=true" target="_blank" rel="noreferrer">Webb Space Telescope</a>
        </p>
    </div>*/


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
        {/*albums.length > 0 && (
            <Row>
                {albums.map(album => (
                    <>
                    <Col key={album.id} xs={12} m={12} lg={12}>
                        <Card style={{marginRight:"1rem",marginBottom:"1rem",border:"none",width:"fit-content"}}>
                            <Card.Img
                                variant='top'
                                src="https://kccoers.github.io/astrophotography/albums/starscapes/20231015_005411155_iOS.webp"
                                style={{height:"20rem"}} />
                            <Card.Body>
                                <Card.Title>{album.albumName}</Card.Title>
                                <Card.Text>{album.albumDescription}</Card.Text>
                                <Button variant='outline-dark' href="https://kccoers.github.io/astrophotography/data.json" target="_blank">VIEW ALBUM</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col key={album.id} xs={12} m={6} lg={4}>
                        <Card style={{marginRight:"1rem",marginBottom:"1rem",border:"none",width:"fit-content"}}>
                            <Card.Img
                                variant='top'
                                src={album.albumCover}
                                style={{height:"20rem"}} />
                            <Card.Body>
                                <Card.Title>{album.albumName}</Card.Title>
                                <Card.Text>{album.albumDescription}{album.albumDescription}{album.albumDescription}{album.albumDescription}{album.albumDescription}</Card.Text>
                                <Button variant='outline-dark' href="https://kccoers.github.io/astrophotography/data.json" target="_blank">VIEW ALBUM</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    </>
                ))}
            </Row>
        )*/}
        </Container>
    )
    
}

export default Astrophotography;
