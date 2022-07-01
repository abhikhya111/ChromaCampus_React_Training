import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Row, Col, Container, Nav, Navbar } from 'react-bootstrap';
import gallery1 from './gallery1.png';
import gallery2 from './gallery2.png';
import gallery3 from './gallery3.png';
import gallery4 from './gallery4.png';
import gallery5 from './gallery5.png';
import gallery6 from './gallery6.png';
import gallery7 from './gallery7.png';
import gallery8 from './gallery8.png';
import gallery9 from './gallery9.png';
import './Gallery.css';
const Gallery = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className=''>
                {/* <img className='aboutMainBanner' src={aboutImg}/> */}
                <h3>Gallery</h3>
                Home / Gallery
            </div>

            <div className='p-5'>
                <Row>
                    <Navbar className="text-dark  navbarSec">
                        <Nav>
                            <Nav.Link href="#" className='navWidth'>All</Nav.Link>
                            <Nav.Link href="#" className='navWidth'>Tools</Nav.Link>
                            <Nav.Link href="#" className='navWidth'> Machine</Nav.Link>
                            <Nav.Link href="#" className='navWidth'>Washers</Nav.Link>
                            <Nav.Link href="#" className='navWidth'>Accesories</Nav.Link>
                            <Nav.Link href="#" className='navWidth'> Spare Parts</Nav.Link>
                        </Nav>
                    </Navbar>
                </Row>
                <Container className='pt-5'>
                    <Row  className='p-4'>
                        <Col><img src={gallery1} className='border border-danger ' />
                        </Col>
                        <Col><img src={gallery2} className='border border-danger ' />
                        </Col>
                        <Col><img src={gallery3} className='border border-danger ' />
                        </Col>
                    </Row>
                    <Row className='p-4'>
                        <Col><img src={gallery4} className='border border-danger ' />
                        </Col>
                        <Col><img src={gallery5} className='border border-danger ' />
                        </Col>
                        <Col><img src={gallery6} className='border border-danger ' />
                        </Col>
                    </Row>
                    <Row className='p-4'>
                        <Col><img src={gallery7} className='border border-danger ' />
                        </Col>
                        <Col><img src={gallery8} className='border border-danger ' />
                        </Col>
                        <Col><img src={gallery9} className='border border-danger ' />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div >
    )
}
export default Gallery;