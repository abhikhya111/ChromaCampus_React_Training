import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import logo from './logo.png';
import map from './map.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-body'>
            <Row>
                <Col md={3}><img src={logo} alt="footer-logo" /></Col>

                <Col md={9}>
                    <div className='menuBottom'>
                        Home Product  CSR  About  Us  Career  Contact us  News and Blogs  Sitemap
                    </div>
                </Col>


            </Row>

            <Row>

                <Col md={3}>
                    <div className='contact-info'>
                        Contact Info
                    </div>
                    <div className='company-name'>
                        LSL Tools Private LTD
                    </div>
                    <div className='location'>
                        <div className='icon-images'></div>
                        <div className='location-details'>Plot no 394 , phase-lll , Udyog vihar , Gurgaon Haryana- 122016</div>
                    </div>
                    <div className='phone-no'>
                        <div className='icon-images'></div>
                        <div className='location-details'>+91 124000608</div>
                    </div>
                    <div className='phone-no'>
                        <div className='icon-images'></div>
                        <div className='location-details'>Sales@Xtrapowertool.com</div>
                    </div>

                </Col>
                <Col md={5} className=''>
                    <div className='map-image'>
                        Map
                    </div>
                    <img src={map} alt="map-image" className='map-image p-3'/>
                </Col>
                <Col md={3}>
                    <div className='formData'>
                        For Query
                    </div>
                    <Form className='form-data'>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Email Address" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                {/* <Col md={3}>
                    
                </Col> */}
            </Row>
            <div className='red-div'>
                <div className='disclaimer'>Disclaimer</div>
                Despite every effort has been made to provide accurate images of each product color, design, description,
                and packaging, but actual colors, design, description, and packaging may vary slightly, due to different
                evice screen settings, the lighting in the installation location, slight differences in product finishes
                ver time and other factors. Our company will not accept responsibility for any color or design differences
                that are not factory faults. In purchasing from our company, you agree to accept the small risk that there
                will be a slight variation between the actual color, design, size, description, packing, and the
                representation on our website/catalog.
            </div>
        </div>
    )
}

