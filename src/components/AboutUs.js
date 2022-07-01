import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Row, Col, Container, Nav, Navbar } from 'react-bootstrap';
// import aboutImg from './aboutImg.png';
import imgNav1 from './imgNav1.png';
import imgNav2 from './imgNav2.png';
import imgNav3 from './imgNav3.png';
import imgNav4 from './imgNav4.png';
import imgNav5 from './imgNav5.png';
import './AboutUs.css';
export default function AboutUs() {
    return (
        <div className='container-fluid'>
            <Header />
            <div className=''>
                {/* <img className='aboutMainBanner' src={aboutImg}/> */}
                <h3>About Us</h3>
                Home/AboutUs
            </div>

            {/* <Container> */}
            <Row className='p-5'>
                <Col md={6} >
                    <h2 className='fontSize2'><u style={{ color: 'red' }}>XTRA POWER TOOL</u></h2>
                    <p className='pt-3 text-dark fontSize'>XTRA POWER is the top-ranking provider of high-quality
                        and innovatively exceptional Power tools, Abrasives, Diamond Saw Blades, TCT, Drill bits,
                        and a wide range of other technically advanced tools to clients from diverse industries and
                        backgrounds. The company has been at the forefront of delivering top-tier tools that vaunt of
                        high-quality and standards. Our products are duly tested for reliability, durability, and
                        performance, which further enable us to offer the best shopping experience to clients including
                        leading businesses and factories.
                    </p>
                </Col>
                <Col md={1}></Col>
                <Col md={5}>
                    <div className='about '>
                        {/* <h1>fhjdhfk</h1> */}
                    </div>
                </Col>

            </Row>
            {/* <Row >
          
                    </Row> */}

            {/* </Container> */}
            <Row className='colorDiv p-5'>
                <h1>HISTORY</h1>
                <div className='fontSize2'>
                    <p className='p-3'>The company launched its first set of products in 2002 under the brand
                        name XTRA POWER. With the inauguration of this brand name, the company witnessed an
                        efflux in demand for their tools and accessories, following which they launched a
                        gamut of other products every year. Over the years the company focused on transforming
                        businesses through the adoption of best management practices and by providing
                        sophisticated and refined products as well as unmatched services to their precious
                        clients.Since its establishment, the company has witnessed massive growth &
                        development in the market and is dedicated to meeting and exceeding client
                        expectations through its products and services.
                    </p>
                </div>
            </Row>
            <Row className='divCenter p-5'>
                <h1 className='text-danger'><strong>WHY US?</strong></h1>
                <div className='fontSize3'>
                    <p className='p-3 fontSize2'>The company takes pronounced pride in supplying genuine
                        and best quality products through its extensive network of suppliers.
                        With over 500 distributors across India, the company has emerged
                        as the market leader in supplying world-class power tools, abrasives,
                        accessories, and more all over India. LSL Tools Pvt Ltd. has also
                        introduced several other brands in the market. Our popular brands
                        including HIMAX, AWANT, B&P, FASTCUT & REWOP are preferred by professionals
                        for their specific needs and applications.<br></br><br></br>
                        With years of experience and know-how in the field of
                        designing and developing agricultural tools, machine tools, and
                        accessories, we are committed to providing vendors with a variety
                        of products that further allow them to fulfil the market demands efficiently.
                    </p>
                </div>

            </Row>
            <div>
                <Row className='textCenter m-5'>
                    <Col md={3} className='border border-danger textCol pt-5'>
                        <h2 className='text-danger'><strong>100,000</strong></h2>
                        <h5 className=''>Happy<br />
                            Customers</h5>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={3} className='border border-danger textCol pt-5'>
                        <h2 className='text-danger'><strong>500</strong></h2>
                        <h5 className=''>Total Product</h5>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={3} className='border border-danger textCol pt-5'>
                        <h2 className='text-danger'><strong>1,000</strong></h2>
                        <h5 className=''>Vendors and<br />
                            Retailers</h5>
                    </Col>
                </Row>

                <div className='p-4'>
                    <Row>
                        <p>A Few Words About</p>
                    </Row>
                    <Row className='textRowDiv m-3'>
                        <Col md={2} className='border border-danger textCol p-5'>
                            <p className=''><strong>Brij Mohan Singla</strong></p>
                            <p className=''>Chairperson</p>
                        </Col>
                        <Col md={2} className='border border-danger textCol p-5'>
                            <p className=''><strong>Akash Singla</strong></p>
                            <p className=''>Vice Chairperson</p>
                        </Col>
                        <Col md={2} className='border border-danger textCol p-5'>
                            <p className=''><strong>Vikas Singla</strong></p>
                            <p className=''>Vice Chairperson</p>
                        </Col>
                        <Col md={2} className='border border-danger textCol pt-5'>
                            <p className=''><strong>Vivek Singla</strong></p>
                            <p className=''>Vice Chairperson</p>
                        </Col>
                    </Row>
                </div>
                <Row className=''>
                    <div>
                        <Navbar className="text-dark bg-light navbarSec p-5">
                            <Nav>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav1} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav2} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav3} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav4} className='imgWidth' />
                                </Nav.Link>
                                <Nav.Link href="#" className=''>
                                    <img src={imgNav5} className='imgWidth' />
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

