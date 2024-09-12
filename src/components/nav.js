import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return(
        <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Kevin Coers</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="certs">Certs</Nav.Link>
                        <Nav.Link href="labs">Labs</Nav.Link>
                        <Nav.Link href="portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="astrophotography">Astrophotography</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
